// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

// 아래 줄은 지우셔도 되고, 남겨두셔도 됩니다 (자동완성용)
import "jsr:@supabase/functions-js/edge-runtime.d.ts"

// 1. Deno 서버 모듈 가져오기
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

// 2. 환경변수에서 Render 파이썬 서버 주소 가져오기
const PY_API_URL = Deno.env.get('PYTHON_API_URL')

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // CORS 처리 (필수)
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // 주소 설정 확인
    if (!PY_API_URL) throw new Error('PYTHON_API_URL 환경변수가 없습니다. Supabase Secrets를 확인하세요.')

    // 3. 앱에서 보낸 데이터 받기
    const { saved_place_ids, liked_itinery_ids } = await req.json()

    console.log(`Tossing to Python Server: ${PY_API_URL}/recommend/next`)

    // 4. 파이썬 서버로 전달 (POST)
    const pyResponse = await fetch(`${PY_API_URL}/places/details`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        saved_place_ids: saved_place_ids || [], 
        liked_itinery_ids: liked_itinery_ids || [] 
      }),
    })

    if (!pyResponse.ok) {
      const err = await pyResponse.text()
      throw new Error(`Python Server Error: ${err}`)
    }

    const data = await pyResponse.json()

    // 5. 결과 반환
    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    })
  }
})
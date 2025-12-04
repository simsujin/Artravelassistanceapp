from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from supabase import create_client
import os
from dotenv import load_dotenv
from typing import List

load_dotenv()

app = FastAPI()

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")
supabase = create_client(SUPABASE_URL, SUPABASE_KEY)

# --- [1] 주문서 양식 (Input Schema) 수정됨 ---
class PlaceDetailsRequest(BaseModel):
    liked_places: List[int]  # 예: [1, 5, 10]

@app.get("/")
def health_check():
    return {"status": "Active"}

# --- [2] 요청받은 ID들의 정보(이름, 타입, 추천대상) 가져오기 ---
@app.post("/places/details")
def get_places_details(data: PlaceDetailsRequest):
    try:
        print(f"조회 요청 ID 목록: {data.liked_places}")

        if not data.liked_places:
            return {"count": 0, "results": []}

        # Supabase 쿼리 수정
        # 1. 컬럼: type (기존 big_category 아님)
        # 2. 필터: .in_("id", 리스트) -> 리스트 안에 있는 ID들만 가져옴
        #response = supabase.table("Place") \
         #   .select("name_en, type, recommended_for") \
         #   .in_("place_id", data.liked_places) \
         #   .execute()
        
        response = (
            supabase.table("Place")
            .select("name_kr")
            .in_("place_id", data.liked_places)
            .execute()
        )
        
        # 결과 반환 (DB 컬럼명이 이미 'type'이므로 별도 가공 없이 그대로 줍니다)
        return {
            "count": len(response.data),
            "results": response.data
        }

    except Exception as e:
        print(f"에러 발생: {e}")
        return {"status": "Error", "detail": str(e)}
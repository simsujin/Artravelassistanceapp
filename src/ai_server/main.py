#read .env
from typing import List
from dotenv import load_dotenv
import os
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from supabase import create_client

# 1. .env 파일 로드 (이 코드가 있으면 VS Code 설정 상관없이 작동함)
load_dotenv()
app = FastAPI()

# 2. Supabase 연결 설정 (환경변수에서 읽어옴)
SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")

try:
    supabase = create_client(SUPABASE_URL, SUPABASE_KEY)
except Exception as e:
    print(f"⚠️ Supabase 클라이언트 생성 실패: {e}")

#3. 주문서 양식
class RequestData(BaseModel):
    saved_place_ids:  List[int]
    liked_itinery_ids: List[int]

#==============!!GET!!==================
#---[기능1] 서버 상태 확인
@app.get("/")
def read_root():
    return {"status": "Active"}

#---[기능 2] DB 연결 테스트 (개발용) ---
@app.get("/test-db")
def test_db_connection():
    try:
        # DB에서 데이터 1개만 가져와봄
        response = supabase.table("Place").select("*").limit(1).execute()
        return {"status": "Success", "data": response.data}
    except Exception as e:
        return {"status": "Error", "detail": str(e)}


#==============!!POST!!==================

#---[기능 3] 실제 추천 로직 (서비스용) ---
@app.post("/recommend/next")
def recommend_next(data: RequestData):
    try:
        # 1. 앱에서 받은 데이터 확인 (로그)
        print(f"요청 받음: 유저가 저장한 장소={data.saved_place_ids} ")
        print(f"유저가 저장한 여정: {data.liked_itinery_ids}")

        # 2. 여기에 나중에 '진짜 추천 알고리즘 함수'를 넣을 것입니다.
        # results = my_algorithm(data.schedule_ids, data.user_likes)
        
        # 지금은 테스트용 가짜 결과 리턴
        return {
            "results": [
                {"name": "Dummy Place 1", "score": 0.9},
                {"name": "Dummy Place 2", "score": 0.8}
            ]
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
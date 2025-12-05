from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from supabase import create_client
import os
from dotenv import load_dotenv
from typing import Any, Dict, List, Optional
import recommender_location
import supabase

load_dotenv()

app = FastAPI()

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")
supabase = create_client(SUPABASE_URL, SUPABASE_KEY)

#=====주문서 양식=====
#테스트용
class PlaceDetailsRequest(BaseModel):
    liked_places: List[int]  # 예: [1, 5, 10]

#위치기반 추천
class LocationRequestModel(BaseModel):
    request: str
    user_id: str
    lat: float  # 위도는 실수형
    lng: float  # 경도는 실수형
    search_radius_km: Optional[float] = 2.5


@app.get("/")
def health_check():
    return {"status": "Active"}

# --- 테스트용
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

#위치기반 추천
@app.post("/recommend/location",response_model=List[Dict[str, Any]])
async def get_location_based_recommendations(input_data: LocationRequestModel):
    """
    위치 정보를 받아 추천 장소를 반환하는 API
    """
    try:
        # Pydantic 모델을 딕셔너리 형태로 변환 (함수 인풋 형식에 맞춤)
        location_input = input_data.dict()
        
        # 요청 타입 확인 (선택 사항)
        if location_input.get("request") != "location":
            raise HTTPException(status_code=400, detail="Invalid request type")

        # recommender_location 모듈의 함수 호출
        recommendation_results = recommender_location.get_recommendations(location_input)
        
        return recommendation_results

    except Exception as e:
        # 에러 발생 시 처리
        raise HTTPException(status_code=500, detail=str(e))
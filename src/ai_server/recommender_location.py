import math
import json
import numpy as np
from numpy.linalg import norm
from sklearn.metrics.pairwise import cosine_similarity as sk_cosine_similarity

# final_recommendations = get_recommendations(location_input)

def haversine_distance(lat1, lon1, lat2, lon2):
    R = 6371  # Radius of Earth in kilometers

    lat1_rad = math.radians(lat1)
    lon1_rad = math.radians(lon1)
    lat2_rad = math.radians(lat2)
    lon2_rad = math.radians(lon2)

    dlon = lon2_rad - lon1_rad
    dlat = lat2_rad - lat1_rad

    a = math.sin(dlat / 2)**2 + math.cos(lat1_rad) * math.cos(lat2_rad) * math.sin(dlon / 2)**2
    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a))

    distance = R * c
    return distance

# Removed the custom cosine_similarity function as we will use sklearn's

def get_recommendations(location_input):
    user_id = location_input["user_id"]
    user_lat = location_input["lat"]
    user_lng = location_input["lng"]
    search_radius_km = location_input.get("search_radius_km", 3) # Get radius from input, default to 3km

    # 1. Retrieve Nearby Places with valid embeddings
    response_all_places = (
        supabase.table("Place")
        .select("place_id, lat, lng, embedding")
        .execute()
    )
    all_places = response_all_places.data

    nearby_places_data = []
    for place in all_places:
        place_lat = place['lat']
        place_lng = place['lng']
        distance = haversine_distance(user_lat, user_lng, place_lat, place_lng)

        if distance <= search_radius_km:
            embedding_str = place['embedding']
            if embedding_str:
                try:
                    place_embedding = [float(e) for e in json.loads(embedding_str)]
                    nearby_places_data.append({
                        "place_id": place['place_id'],
                        "embedding": place_embedding,
                        "lat": place['lat'],
                        "lng": place['lng'],
                        "distance": distance
                    })
                except json.JSONDecodeError:
                    # Skip if embedding string is malformed JSON
                    continue

    # 2. Retrieve User Profile Embedding
    user_persona = None
    for persona_name, persona_details in personas_data.items():
        if persona_details['user_id'] == user_id:
            user_persona = persona_details
            break

    user_profile_embedding = None
    if user_persona:
        saved_place_ids = user_persona['saved_place_ids']
        liked_place_ids = user_persona['liked_place_ids']
        user_relevant_place_ids = list(set(saved_place_ids + liked_place_ids))

        response_user_places = (
            supabase.table("Place")
            .select("place_id, embedding")
            .in_("place_id", user_relevant_place_ids)
            .execute()
        )
        user_places_data = response_user_places.data

        user_embeddings = []
        for place in user_places_data:
            embedding_str = place['embedding']
            if embedding_str:
                try:
                    embedding_list = json.loads(embedding_str)
                    place_embedding = [float(e) for e in embedding_list]
                    user_embeddings.append(place_embedding)
                except json.JSONDecodeError:
                    continue

        if user_embeddings:
            user_profile_embedding = np.mean(user_embeddings, axis=0).tolist()

    # 3. Calculate Recommendation Scores
    recommendations = []
    if user_profile_embedding and nearby_places_data:
        user_vec = np.array(user_profile_embedding).reshape(1, -1)
        for place in nearby_places_data:
            if place['embedding']:
                place_vec = np.array(place['embedding']).reshape(1, -1)
                # Calculate cosine similarity score (taste score) using sklearn
                cosine_score = sk_cosine_similarity(user_vec, place_vec)[0][0]

                distance = place['distance']
                distance_score = 1 - (distance / search_radius_km)
                distance_score = max(0, min(1, distance_score))

                combined_rec_score = (0.7 * cosine_score) + (0.3 * distance_score)

                recommendations.append({
                    "place_id": place['place_id'],
                    "rec_score": combined_rec_score
                })

    # Sort recommendations by score in descending order
    recommendations.sort(key=lambda x: x['rec_score'], reverse=True)

    return recommendations



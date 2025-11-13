import { ArrowLeft, MapPin, Clock, TrendingUp } from 'lucide-react';
import { RoundedCard } from './ui/RoundedCard';

interface RecommendationScreenProps {
  onBack: () => void;
  onSelectPlace: (place: string) => void;
}

const recommendations = [
  {
    name: '루브르 박물관',
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=400&q=80',
    distance: '1.5km',
    time: '18분',
    percentage: 68,
    reason: '에펠탑 방문자의 68%가 다음으로 방문',
  },
  {
    name: '개선문',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&q=80',
    distance: '2.2km',
    time: '25분',
    percentage: 52,
    reason: '에펠탑과 함께 많이 방문하는 장소',
  },
  {
    name: '노트르담 대성당',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&q=80',
    distance: '2.8km',
    time: '32분',
    percentage: 45,
    reason: '역사적 건축물을 좋아하는 여행자 추천',
  },
  {
    name: '몽마르트 언덕',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&q=80',
    distance: '3.5km',
    time: '40분',
    percentage: 38,
    reason: '파리 전망을 즐기고 싶은 여행자 추천',
  },
];

export function RecommendationScreen({ onBack, onSelectPlace }: RecommendationScreenProps) {
  return (
    <div className="w-full h-full bg-[#FAFAF8] overflow-y-auto pb-28">
      <div className="px-6 pt-16 pb-8">
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={onBack}
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1>방문자 추천</h1>
        </div>

        <RoundedCard className="bg-blue-50 border border-blue-200 mb-6">
          <div className="flex items-start gap-3">
            <TrendingUp className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-blue-900 mb-1">방문 패턴 분석</h4>
              <p className="text-blue-700">
                에펠탑을 방문한 여행자들이 실제로 다음에 방문한 장소입니다
              </p>
            </div>
          </div>
        </RoundedCard>

        <div className="space-y-4">
          {recommendations.map((place, index) => (
            <RoundedCard
              key={index}
              onClick={() => onSelectPlace(place.name)}
              className="cursor-pointer hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-4">
                <div className="w-28 h-28 rounded-2xl overflow-hidden flex-shrink-0">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1">
                  <h3 className="mb-2">{place.name}</h3>
                  
                  <div className="flex items-center gap-4 text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{place.distance}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{place.time}</span>
                    </div>
                  </div>

                  <div className="mb-2">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[#4A90E2]">{place.percentage}% 방문</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#4A90E2] rounded-full transition-all"
                        style={{ width: `${place.percentage}%` }}
                      />
                    </div>
                  </div>

                  <p className="text-gray-600">{place.reason}</p>
                </div>
              </div>
            </RoundedCard>
          ))}
        </div>
      </div>
    </div>
  );
}
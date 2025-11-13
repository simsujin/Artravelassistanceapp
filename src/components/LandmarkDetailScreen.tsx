import { ArrowLeft, Navigation, Bookmark, Camera, MapPin, Clock, Star, Heart, Hash } from 'lucide-react';
import { useState } from 'react';
import { RoundedCard } from './ui/RoundedCard';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion, AnimatePresence } from 'motion/react';

interface LandmarkDetailScreenProps {
  landmark: string | null;
  onBack: () => void;
  onARView: () => void;
  onRecommendations: () => void;
  onNavigate: () => void;
}

const hashtags = [
  { tag: '야경이멋져요', count: 245 },
  { tag: '사진명소', count: 198 },
  { tag: '꼭가봐야해요', count: 176 },
  { tag: '로맨틱해요', count: 143 },
  { tag: '역사적가치', count: 98 },
  { tag: '파리여행필수', count: 87 },
];

export function LandmarkDetailScreen({ 
  landmark, 
  onBack, 
  onARView, 
  onRecommendations,
  onNavigate 
}: LandmarkDetailScreenProps) {
  const [isSaved, setIsSaved] = useState(false);
  const [hasVisited, setHasVisited] = useState(false);
  const [showHashtags, setShowHashtags] = useState(false);

  const handleLike = () => {
    setHasVisited(true);
    setShowHashtags(true);
  };

  return (
    <div className="w-full h-full bg-[#FAFAF8] overflow-y-auto pb-28">
      {/* Hero Image */}
      <div className="relative h-96">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=800&q=80"
          alt="Eiffel Tower"
          className="w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        <button
          onClick={onBack}
          className="absolute top-12 left-6 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        <div className="absolute bottom-6 left-6 right-6">
          <h1 className="text-white mb-2">에펠탑</h1>
          <div className="flex items-center gap-4 text-white/90">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>850m</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>11분 도보</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-white" />
              <span>4.8</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-6">
        {/* Action Buttons */}
        <div className="grid grid-cols-4 gap-3 mb-6">
          <button
            onClick={onNavigate}
            className="flex flex-col items-center gap-2 py-4 bg-white rounded-[18px] border border-gray-200 hover:border-[#4A90E2] transition-colors"
          >
            <Navigation className="w-6 h-6 text-[#4A90E2]" />
            <span className="text-gray-700">경로</span>
          </button>
          
          <button 
            onClick={() => setIsSaved(!isSaved)}
            className={`flex flex-col items-center gap-2 py-4 rounded-[18px] border transition-colors ${
              isSaved 
                ? 'bg-[#4A90E2] border-[#4A90E2] text-white' 
                : 'bg-white border-gray-200 hover:border-[#4A90E2] text-gray-700'
            }`}
          >
            <Bookmark className={`w-6 h-6 ${isSaved ? 'fill-white' : ''}`} />
            <span>저장</span>
          </button>
          
          <button
            onClick={handleLike}
            className={`flex flex-col items-center gap-2 py-4 rounded-[18px] border transition-colors ${
              hasVisited 
                ? 'bg-red-500 border-red-500 text-white' 
                : 'bg-white border-gray-200 hover:border-red-500 text-gray-700'
            }`}
          >
            <Heart className={`w-6 h-6 ${hasVisited ? 'fill-white' : ''}`} />
            <span>좋아요</span>
          </button>
          
          <button
            onClick={onARView}
            className="flex flex-col items-center gap-2 py-4 bg-[#4A90E2] rounded-[18px] text-white hover:bg-[#357ABD] transition-colors"
          >
            <Camera className="w-6 h-6" />
            <span>AR 보기</span>
          </button>
        </div>

        {/* Hashtags Section */}
        <AnimatePresence>
          {showHashtags && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-6"
            >
              <RoundedCard className="bg-pink-50 border border-pink-200">
                <div className="flex items-center gap-2 mb-4">
                  <Heart className="w-5 h-5 text-red-500 fill-red-500" />
                  <h3>방문자들의 의견</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {hashtags.map((item, index) => (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className="px-4 py-2 bg-white rounded-full border border-pink-200 hover:border-pink-400 hover:bg-pink-100 transition-colors flex items-center gap-2"
                    >
                      <Hash className="w-4 h-4 text-pink-600" />
                      <span className="text-pink-700">{item.tag}</span>
                      <span className="text-pink-500">({item.count})</span>
                    </motion.button>
                  ))}
                </div>
                <p className="text-pink-700 mt-4">
                  💡 좋아요를 눌러주셔서 감사합니다! 다른 여행자들에게 큰 도움이 됩니다.
                </p>
              </RoundedCard>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Description */}
        <h3 className="mb-3">소개</h3>
        <RoundedCard className="mb-6">
          <p className="text-gray-600">
            에펠탑은 1889년 파리 만국박람회를 기념하기 위해 건설된 철탑입니다. 
            높이 324m로 파리에서 가장 높은 건축물이며, 매년 약 700만 명의 관광객이 방문합니다.
          </p>
        </RoundedCard>

        {/* Opening Hours */}
        <h3 className="mb-3">운영 시간</h3>
        <RoundedCard className="mb-6">
          <div className="flex items-center justify-between">
            <span className="text-gray-600">매일</span>
            <span>09:30 - 23:45</span>
          </div>
        </RoundedCard>

        {/* Visitor Recommendations */}
        <div className="flex items-center justify-between mb-4">
          <h3>방문자들이 다음으로 간 곳</h3>
          <button
            onClick={onRecommendations}
            className="text-[#4A90E2]"
          >
            모두 보기
          </button>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-4">
          <div
            onClick={onRecommendations}
            className="flex-shrink-0 w-64 cursor-pointer"
          >
            <RoundedCard className="hover:shadow-lg transition-shadow">
              <div className="relative h-32 rounded-2xl overflow-hidden mb-3">
                <img
                  src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=400&q=80"
                  alt="Louvre"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4>루브르 박물관</h4>
              <p className="text-gray-600 mt-1">1.5km · 도보 18분</p>
              <p className="text-[#4A90E2] mt-2">68%가 방문</p>
            </RoundedCard>
          </div>

          <div
            onClick={onRecommendations}
            className="flex-shrink-0 w-64 cursor-pointer"
          >
            <RoundedCard className="hover:shadow-lg transition-shadow">
              <div className="relative h-32 rounded-2xl overflow-hidden mb-3">
                <img
                  src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&q=80"
                  alt="Arc"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4>개선문</h4>
              <p className="text-gray-600 mt-1">2.2km · 도보 25분</p>
              <p className="text-[#4A90E2] mt-2">52%가 방문</p>
            </RoundedCard>
          </div>
        </div>
      </div>
    </div>
  );
}
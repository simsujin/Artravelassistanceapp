import { ArrowLeft, Navigation, Bookmark, Camera, MapPin, Clock, Star, Heart, Hash, User, Info } from 'lucide-react';
import { useState } from 'react';
import { RoundedCard } from './ui/RoundedCard';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion, AnimatePresence } from 'motion/react';
import { placesData } from '../data/placesData';

interface LandmarkDetailScreenProps {
  landmark: string | null;
  onBack: () => void;
  onARView: () => void;
  onRecommendations: () => void;
  onNavigate: () => void;
  onUserSelect?: (user: { name: string, avatar: string, country: string }) => void;
}

export function LandmarkDetailScreen({ 
  landmark, 
  onBack, 
  onARView, 
  onRecommendations,
  onNavigate,
  onUserSelect
}: LandmarkDetailScreenProps) {
  const [isSaved, setIsSaved] = useState(false);
  const [hasVisited, setHasVisited] = useState(false);
  const [showHashtags, setShowHashtags] = useState(false);
  const [likedTags, setLikedTags] = useState<string[]>([]);
  const [selectedHashtag, setSelectedHashtag] = useState<typeof placeData.hashtags[0] | null>(null);

  // Get place data or use default
  const placeData = landmark && placesData[landmark] ? placesData[landmark] : {
    name: '에펠탑',
    nameEn: 'Eiffel Tower',
    category: '랜드마크',
    country: '프랑스',
    city: '파리',
    image: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=800&q=80',
    rating: 4.8,
    distance: '850m',
    openHours: '09:00 - 23:00',
    description: '1889년 파리 만국박람회를 위해 건설된 324m 높이의 철탑입니다.',
    highlights: ['매시간 정각 조명쇼', '전망대에서 파리 전경'],
    tips: ['온라인 예매로 대기시간 단축', '일몰 1시간 전 방문 추천'],
    hashtags: [
      { tag: '#야경이멋져요', count: 245, users: [
        { name: '김민준', avatar: '👨', country: '🇰🇷' },
        { name: 'Sarah Kim', avatar: '👩', country: '🇺🇸' },
      ]},
    ]
  };

  const handleLike = () => {
    setHasVisited(true);
    setShowHashtags(true);
  };

  const toggleLike = (tag: string) => {
    setLikedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <div className="w-full h-full bg-[#FAFAF8] overflow-y-auto pb-28">
      {/* Hero Image */}
      <div className="relative h-96">
        <ImageWithFallback
          src={placeData.image}
          alt={placeData.nameEn}
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
          <h1 className="text-white mb-2">{placeData.name}</h1>
          <div className="flex items-center gap-4 text-white/90">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{placeData.distance}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>11분 도보</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-white" />
              <span>{placeData.rating}</span>
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
            <span className="text-gray-700 text-center">경로</span>
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
            <span className="text-center">저장</span>
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
            <span className="text-center">좋아요</span>
          </button>
          
          <button
            onClick={onARView}
            className="flex flex-col items-center gap-2 py-4 bg-[#4A90E2] rounded-[18px] text-white hover:bg-[#357ABD] transition-colors"
          >
            <Camera className="w-6 h-6" />
            <span className="text-center">AR 보기</span>
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
                  {placeData.hashtags.map((item, index) => (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => setSelectedHashtag(item)}
                      className="px-4 py-2 bg-white rounded-full border border-pink-200 hover:border-pink-400 hover:bg-pink-100 transition-colors flex items-center gap-2"
                    >
                      <Hash className="w-4 h-4 text-pink-600" />
                      <span className="text-pink-700">{item.tag}</span>
                      <span className="text-pink-500">({item.count})</span>
                    </motion.button>
                  ))}
                </div>
                <p className="text-pink-700 mt-4 text-center">
                  💡 좋아요를 눌러주셔서 감사합니다! 다른 여행자들에게 큰 도움이 됩니다.
                </p>
                
                {/* Like/Unlike Hashtags */}
                <div className="mt-4">
                  <p className="text-pink-700 mb-2 text-center">당신도 동의하시나요?</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {placeData.hashtags.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => toggleLike(item.tag)}
                        className={`px-4 py-2 rounded-full border transition-all flex items-center gap-2 ${
                          likedTags.includes(item.tag)
                            ? 'bg-[#EF4444] border-[#EF4444] text-white'
                            : 'bg-white border-pink-200 text-pink-700 hover:bg-pink-50'
                        }`}
                      >
                        <Heart className={`w-4 h-4 ${likedTags.includes(item.tag) ? 'fill-white' : ''}`} />
                        <span>{item.tag}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </RoundedCard>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Description */}
        <h3 className="mb-3">소개</h3>
        <RoundedCard className="mb-6">
          <p className="text-gray-600">
            {placeData.description}
          </p>
        </RoundedCard>

        {/* Opening Hours */}
        <h3 className="mb-3">운영 시간</h3>
        <RoundedCard className="mb-6">
          <div className="flex items-center justify-between">
            <span className="text-gray-600">매일</span>
            <span>{placeData.openHours}</span>
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

      {/* Hashtag Users Modal */}
      <AnimatePresence>
        {selectedHashtag && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-end z-50"
            onClick={() => setSelectedHashtag(null)}
          >
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="w-full bg-white rounded-t-[30px] p-6 pb-12 max-h-[60vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-center mb-4">
                <div className="w-12 h-1 bg-gray-300 rounded-full" />
              </div>
              
              <h3 className="mb-2 text-center">{selectedHashtag.tag}</h3>
              <p className="text-gray-600 mb-6 text-center">{selectedHashtag.count}명이 선택했어요</p>

              <div className="space-y-3">
                {selectedHashtag.users.map((user, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => {
                      setSelectedHashtag(null);
                      // Navigate to user detail - we'll need to pass this through props
                      if (onUserSelect) {
                        onUserSelect(user);
                      }
                    }}
                    className="flex items-center gap-4 p-4 bg-[#F7F4EC] rounded-2xl cursor-pointer hover:bg-[#F0EDE2] transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4A90E2] to-[#357ABD] flex items-center justify-center text-2xl">
                      {user.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4>{user.name}</h4>
                        <span>{user.country}</span>
                      </div>
                      <p className="text-gray-600">여행자</p>
                    </div>
                    <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors">
                      <User className="w-5 h-5 text-gray-600" />
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
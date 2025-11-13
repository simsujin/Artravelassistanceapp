import { ArrowLeft, Navigation, Bookmark, Camera, MapPin, Clock, Star, Heart, Hash, Sparkles, User } from 'lucide-react';
import { useState } from 'react';
import { RoundedCard } from './ui/RoundedCard';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion, AnimatePresence } from 'motion/react';

interface RestaurantDetailScreenProps {
  restaurant: string | null;
  onBack: () => void;
  onARView: () => void;
  onNavigate: () => void;
}

const hashtagData = [
  { tag: '#분위기좋아요', count: 127, users: [
    { name: '김민준', avatar: '👨', country: '🇰🇷' },
    { name: 'Sarah Kim', avatar: '👩', country: '🇺🇸' },
    { name: '佐藤健', avatar: '👨', country: '🇯🇵' },
  ]},
  { tag: '#음식맛있어요', count: 98, users: [
    { name: '이서연', avatar: '👩', country: '🇰🇷' },
    { name: 'John Smith', avatar: '👨', country: '🇬🇧' },
  ]},
  { tag: '#친절해요', count: 76, users: [
    { name: '박지호', avatar: '👨', country: '🇰🇷' },
    { name: 'Emma Wilson', avatar: '👩', country: '🇦🇺' },
  ]},
  { tag: '#가성비좋아요', count: 54, users: [
    { name: '최유진', avatar: '👩', country: '🇰🇷' },
  ]},
  { tag: '#데이트추천', count: 43, users: [
    { name: '정민호', avatar: '👨', country: '🇰🇷' },
  ]},
  { tag: '#사진맛집', count: 38, users: [
    { name: '강지우', avatar: '👨', country: '🇰🇷' },
  ]},
];

const popularDishes = [
  {
    name: 'Coq au Vin',
    description: '프랑스 전통 요리로, 와인에 조린 닭고기 요리입니다. 버섯과 양파가 곁들여져 깊고 풍부한 맛이 특징입니다.',
    price: '€24',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80',
    rating: 4.8
  },
  {
    name: 'Ratatouille',
    description: '여러 가지 채소를 올리브 오일로 볶아 만든 프로방스 지방의 전통 요리입니다. 건강하면서도 맛있는 채식 메뉴입니다.',
    price: '€18',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
    rating: 4.6
  },
  {
    name: 'Beef Bourguignon',
    description: '부르고뉴 지방의 대표적인 소고기 스튜입니다. 레드 와인에 푹 끓여 부드러운 식감과 진한 풍미가 일품입니다.',
    price: '€28',
    image: 'https://images.unsplash.com/photo-1625937286074-9ca519d5d9df?w=400&q=80',
    rating: 4.9
  }
];

export function RestaurantDetailScreen({ 
  restaurant, 
  onBack, 
  onARView,
  onNavigate 
}: RestaurantDetailScreenProps) {
  const [isSaved, setIsSaved] = useState(false);
  const [hasVisited, setHasVisited] = useState(false);
  const [showHashtags, setShowHashtags] = useState(false);
  const [likedTags, setLikedTags] = useState<string[]>([]);
  const [selectedHashtag, setSelectedHashtag] = useState<typeof hashtagData[0] | null>(null);

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
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80"
          alt="Restaurant"
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
          <h1 className="text-white mb-2">Le Petit Bistro</h1>
          <p className="text-white/90 mb-3">프랑스 비스트로 · €€</p>
          <div className="flex items-center gap-4 text-white/90">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>120m</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>2분 도보</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-white" />
              <span>4.5</span>
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
                  {hashtagData.map((item, index) => (
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
                    {hashtagData.map((item, index) => (
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

        {/* AI Generated Info */}
        <RoundedCard className="mb-6 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-[#4A90E2]" />
            <h3 className="text-[#4A90E2]">AI 맞춤 정보</h3>
          </div>
          <p className="text-gray-700 mb-3">
            Le Petit Bistro는 파리 5구에 위치한 정통 프랑스 비스트로로, 1985년부터 운영되어온 역사 깊은 레스토랑입니다. 
            현지인들에게 사랑받는 숨은 맛집으로, 전통 프랑스 가정식 요리를 합리적인 가격에 제공합니다.
          </p>
          <div className="bg-white/80 rounded-2xl p-4">
            <h4 className="mb-2 text-gray-800">✨ 특별 추천 이유</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-[#4A90E2]">•</span>
                <span>신선한 재료를 사용한 정통 프랑스 요리</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4A90E2]">•</span>
                <span>아늑하고 로맨틱한 분위기, 데이트 장소로 최적</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4A90E2]">•</span>
                <span>합리적인 가격대로 현지 분위기를 즐길 수 있음</span>
              </li>
            </ul>
          </div>
        </RoundedCard>

        {/* Popular Dishes with AI Info */}
        <h3 className="mb-3">🔥 인기 메뉴 TOP 3</h3>
        <div className="space-y-4 mb-6">
          {popularDishes.map((dish, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <RoundedCard className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
                <div className="flex flex-col gap-4">
                  {/* Image */}
                  <div className="w-full h-48 rounded-2xl overflow-hidden">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Info */}
                  <div className="px-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4>{dish.name}</h4>
                      <span className="text-[#4A90E2]">{dish.price}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span>{dish.rating}</span>
                      </div>
                      <span className="text-gray-400">·</span>
                      <span className="text-gray-600">고객 추천 메뉴</span>
                    </div>
                    
                    <p className="text-gray-600">{dish.description}</p>
                  </div>
                </div>
              </RoundedCard>
            </motion.div>
          ))}
        </div>

        {/* Description */}
        <h3 className="mb-3">소개</h3>
        <RoundedCard className="mb-6">
          <p className="text-gray-600">
            파리 시내 중심부에 위치한 전통적인 프랑스 비스트로입니다. 
            신선한 재료로 만든 정통 프랑스 요리와 아늑한 분위기가 특징이며, 
            현지인과 관광객 모두에게 사랑받는 레스토랑입니다.
          </p>
        </RoundedCard>

        {/* Opening Hours */}
        <h3 className="mb-3">영업 시간</h3>
        <RoundedCard className="mb-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">월 - 금</span>
              <span>12:00 - 22:00</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">토 - 일</span>
              <span>11:00 - 23:00</span>
            </div>
          </div>
        </RoundedCard>

        {/* Reviews */}
        <h3 className="mb-3">최근 리뷰</h3>
        <div className="space-y-3">
          <RoundedCard>
            <div className="flex items-center gap-2 mb-2">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            </div>
            <p className="text-gray-600 mb-2">
              "정통 프랑스 요리를 맛볼 수 있는 멋진 곳이에요. 분위기도 아늑하고 직원들도 친절합니다!"
            </p>
            <p className="text-gray-400">- 김OO · 2일 전</p>
          </RoundedCard>

          <RoundedCard>
            <div className="flex items-center gap-2 mb-2">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <Star className="w-4 h-4 text-gray-300" />
            </div>
            <p className="text-gray-600 mb-2">
              "와인 선택이 훌륭하고 코코뱅이 정말 맛있었어요. 다음에 또 오고 싶습니다."
            </p>
            <p className="text-gray-400">- 이OO · 5일 전</p>
          </RoundedCard>
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
                    className="flex items-center gap-4 p-4 bg-[#F7F4EC] rounded-2xl"
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
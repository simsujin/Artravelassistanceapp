import { ArrowLeft, MapPin, Star, Clock, TrendingUp, Sparkles, Filter } from 'lucide-react';
import { RoundedCard } from './ui/RoundedCard';
import { motion } from 'motion/react';
import { useState } from 'react';

interface ExploreScreenProps {
  onBack: () => void;
  onSelectPlace: (place: string) => void;
}

const regions = [
  { name: '라틴 구역', count: 24, icon: '🏛️' },
  { name: '마레 지구', count: 31, icon: '🎨' },
  { name: '몽마르트', count: 18, icon: '🎭' },
  { name: '샹젤리제', count: 27, icon: '✨' },
];

const recommendedPlaces = [
  {
    name: 'Le Marais',
    category: '역사 지구',
    description: '중세 건축물과 트렌디한 상점들이 공존하는 매력적인 지역',
    rating: 4.7,
    distance: '1.5km',
    tags: ['역사', '쇼핑', '카페'],
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&q=80',
    aiReason: '현지인들이 가장 많이 추천하는 지역으로, 다양한 문화체험이 가능합니다.'
  },
  {
    name: 'Montmartre',
    category: '예술 지구',
    description: '파리의 예술적 영혼이 살아있는 언덕 위 마을',
    rating: 4.8,
    distance: '2.3km',
    tags: ['예술', '전망', '낭만'],
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=400&q=80',
    aiReason: '사크레 쾨르 대성당과 테르트르 광장에서 파리의 낭만을 느껴보세요.'
  },
  {
    name: 'Latin Quarter',
    category: '대학가',
    description: '소르본 대학이 있는 활기찬 학생 거리',
    rating: 4.6,
    distance: '800m',
    tags: ['학생가', '서점', '분위기'],
    image: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=400&q=80',
    aiReason: '합리적인 가격의 레스토랑과 독특한 서점들을 만나보세요.'
  },
];

const trendingNow = [
  { name: '세느강 크루즈', trend: '+45%', emoji: '🚢' },
  { name: '루브르 야간 개장', trend: '+32%', emoji: '🌙' },
  { name: '에펠탑 일출 관람', trend: '+28%', emoji: '🌅' },
];

export function ExploreScreen({ onBack, onSelectPlace }: ExploreScreenProps) {
  const [selectedTab, setSelectedTab] = useState<'region' | 'recommended'>('recommended');

  return (
    <div className="w-full h-full bg-[#FAFAF8] overflow-y-auto pb-28">
      {/* Header */}
      <div className="sticky top-0 bg-white/95 backdrop-blur-md z-20 border-b border-gray-200">
        <div className="px-6 pt-12 pb-4">
          <div className="flex items-center gap-4 mb-4">
            <button
              onClick={onBack}
              className="w-10 h-10 rounded-full bg-[#F7F4EC] flex items-center justify-center"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1>탐색</h1>
          </div>

          {/* Tab Navigation */}
          <div className="flex gap-2">
            <button
              onClick={() => setSelectedTab('recommended')}
              className={`flex-1 h-12 rounded-full transition-all text-center ${
                selectedTab === 'recommended'
                  ? 'bg-[#4A90E2] text-white'
                  : 'bg-[#F7F4EC] text-gray-600'
              }`}
            >
              ✨ AI 추천
            </button>
            <button
              onClick={() => setSelectedTab('region')}
              className={`flex-1 h-12 rounded-full transition-all text-center ${
                selectedTab === 'region'
                  ? 'bg-[#4A90E2] text-white'
                  : 'bg-[#F7F4EC] text-gray-600'
              }`}
            >
              📍 지역별
            </button>
          </div>
        </div>
      </div>

      <div className="px-6 pt-6">
        {/* Trending Now Section */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-[#4A90E2]" />
            <h3>지금 인기있는</h3>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 -mx-6 px-6">
            {trendingNow.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0"
              >
                <RoundedCard className="bg-gradient-to-br from-[#4A90E2] to-[#357ABD] text-white min-w-[200px]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-3xl">{item.emoji}</span>
                    <span className="px-3 py-1 bg-white/20 rounded-full">{item.trend}</span>
                  </div>
                  <p className="text-center">{item.name}</p>
                </RoundedCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Region Search */}
        {selectedTab === 'region' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h3 className="text-center">지역 선택</h3>
            <div className="grid grid-cols-2 gap-4">
              {regions.map((region, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => onSelectPlace(region.name)}
                  className="cursor-pointer"
                >
                  <RoundedCard className="hover:shadow-lg transition-shadow">
                    <div className="text-center">
                      <div className="text-4xl mb-3">{region.icon}</div>
                      <h4 className="mb-1">{region.name}</h4>
                      <p className="text-gray-600">{region.count}개 장소</p>
                    </div>
                  </RoundedCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* AI Recommended */}
        {selectedTab === 'recommended' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="flex items-center justify-between mb-4">
              <h3>맞춤 추천</h3>
              <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#F7F4EC] text-gray-700">
                <Filter className="w-4 h-4" />
                <span>필터</span>
              </button>
            </div>

            {recommendedPlaces.map((place, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                onClick={() => onSelectPlace(place.name)}
                className="cursor-pointer"
              >
                <RoundedCard className="overflow-hidden hover:shadow-xl transition-shadow">
                  {/* Image */}
                  <div className="w-full h-48 rounded-2xl overflow-hidden mb-4">
                    <img
                      src={place.image}
                      alt={place.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="mb-1">{place.name}</h4>
                        <p className="text-gray-600">{place.category}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span>{place.rating}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-3">{place.description}</p>

                    {/* AI Reason */}
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-3 mb-3 border border-blue-100">
                      <div className="flex items-start gap-2">
                        <Sparkles className="w-4 h-4 text-[#4A90E2] flex-shrink-0 mt-0.5" />
                        <p className="text-gray-700">{place.aiReason}</p>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex gap-2 mb-3">
                      {place.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-[#F7F4EC] rounded-full text-gray-700 text-center"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Distance */}
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{place.distance}</span>
                      <span>·</span>
                      <Clock className="w-4 h-4" />
                      <span>도보 18분</span>
                    </div>
                  </div>
                </RoundedCard>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}

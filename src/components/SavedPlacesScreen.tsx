import { Bookmark, Users, Star, MapPin, Trash2, Grid3x3, List } from 'lucide-react';
import { RoundedCard } from './ui/RoundedCard';
import { motion } from 'motion/react';
import { useState } from 'react';

interface SavedPlacesScreenProps {
  onSelectPlace: (place: string) => void;
}

const savedPlaces = [
  {
    name: '에펠탑',
    category: '랜드마크',
    image: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=400&q=80',
    rating: 4.8,
    distance: '1.2km',
    savedDate: '2일 전',
    tags: ['사진명소', '야경']
  },
  {
    name: '루브르 박물관',
    category: '박물관',
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=400&q=80',
    rating: 4.9,
    distance: '800m',
    savedDate: '3일 전',
    tags: ['예술', '역사']
  },
  {
    name: 'Le Jules Verne',
    category: '레스토랑',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&q=80',
    rating: 4.7,
    distance: '1.5km',
    savedDate: '5일 전',
    tags: ['미슐랭', '프렌치']
  },
  {
    name: '노트르담 대성당',
    category: '랜드마크',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&q=80',
    rating: 4.8,
    distance: '600m',
    savedDate: '1주일 전',
    tags: ['고딕', '역사']
  },
];

const similarStylePlaces = [
  {
    name: '사크레 쾨르 대성당',
    category: '랜드마크',
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=400&q=80',
    rating: 4.9,
    distance: '2.1km',
    likedBy: 328,
    matchPercentage: 94,
    reason: '역사적인 건축물을 좋아하시는 스타일'
  },
  {
    name: '오르세 미술관',
    category: '박물관',
    image: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=400&q=80',
    rating: 4.8,
    distance: '1.3km',
    likedBy: 284,
    matchPercentage: 91,
    reason: '인상파 작품을 선호하는 분들이 추천'
  },
  {
    name: 'Septime',
    category: '레스토랑',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80',
    rating: 4.7,
    distance: '2.5km',
    likedBy: 256,
    matchPercentage: 89,
    reason: '고급 다이닝을 선호하는 스타일'
  },
];

export function SavedPlacesScreen({ onSelectPlace }: SavedPlacesScreenProps) {
  const [selectedTab, setSelectedTab] = useState<'saved' | 'similar'>('saved');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');

  return (
    <div className="w-full h-full bg-[#FAFAF8] overflow-y-auto pb-28">
      {/* Header */}
      <div className="sticky top-0 bg-white/95 backdrop-blur-md z-20 border-b border-gray-200">
        <div className="px-6 pt-12 pb-4">
          <div className="flex items-center justify-between mb-4">
            <h1>저장한 장소</h1>
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('list')}
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  viewMode === 'list' ? 'bg-[#4A90E2] text-white' : 'bg-[#F7F4EC] text-gray-600'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  viewMode === 'grid' ? 'bg-[#4A90E2] text-white' : 'bg-[#F7F4EC] text-gray-600'
                }`}
              >
                <Grid3x3 className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex gap-2">
            <button
              onClick={() => setSelectedTab('saved')}
              className={`flex-1 h-12 rounded-full transition-all flex items-center justify-center gap-2 ${
                selectedTab === 'saved'
                  ? 'bg-[#4A90E2] text-white'
                  : 'bg-[#F7F4EC] text-gray-600'
              }`}
            >
              <Bookmark className="w-4 h-4" />
              <span>내 저장 ({savedPlaces.length})</span>
            </button>
            <button
              onClick={() => setSelectedTab('similar')}
              className={`flex-1 h-12 rounded-full transition-all flex items-center justify-center gap-2 ${
                selectedTab === 'similar'
                  ? 'bg-[#4A90E2] text-white'
                  : 'bg-[#F7F4EC] text-gray-600'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>추천</span>
            </button>
          </div>
        </div>
      </div>

      <div className="px-6 pt-6">
        {/* My Saved Places */}
        {selectedTab === 'saved' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={viewMode === 'grid' ? 'grid grid-cols-2 gap-4' : 'space-y-4'}
          >
            {savedPlaces.map((place, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => onSelectPlace(place.name)}
                className="cursor-pointer"
              >
                {viewMode === 'list' ? (
                  <RoundedCard className="hover:shadow-xl transition-shadow">
                    <div className="flex gap-4">
                      <div className="w-24 h-24 rounded-2xl bg-gray-200 overflow-hidden flex-shrink-0">
                        <img
                          src={place.image}
                          alt={place.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-1">
                          <div>
                            <h4 className="mb-1">{place.name}</h4>
                            <p className="text-gray-600">{place.category}</p>
                          </div>
                          <button className="p-2 hover:bg-red-50 rounded-full transition-colors">
                            <Trash2 className="w-4 h-4 text-red-500" />
                          </button>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                          <span className="text-gray-600">{place.rating}</span>
                          <span className="text-gray-400">·</span>
                          <MapPin className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-600">{place.distance}</span>
                        </div>
                        <div className="flex gap-2">
                          {place.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 bg-[#F7F4EC] rounded-full text-gray-700 text-xs text-center"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <p className="text-gray-400 text-xs mt-2">저장: {place.savedDate}</p>
                      </div>
                    </div>
                  </RoundedCard>
                ) : (
                  <RoundedCard className="hover:shadow-xl transition-shadow overflow-hidden">
                    <div className="relative">
                      <div className="w-full h-32 rounded-2xl bg-gray-200 overflow-hidden mb-3">
                        <img
                          src={place.image}
                          alt={place.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <button className="absolute top-2 right-2 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-red-50 transition-colors">
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </button>
                    </div>
                    <h4 className="mb-1 text-center">{place.name}</h4>
                    <p className="text-gray-600 mb-2 text-center">{place.category}</p>
                    <div className="flex items-center justify-center gap-2">
                      <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                      <span className="text-gray-600 text-sm">{place.rating}</span>
                    </div>
                  </RoundedCard>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Similar Travel Style Places */}
        {selectedTab === 'similar' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-4 mb-6">
              <h3 className="mb-2 text-center">당신의 여행 스타일 🎨</h3>
              <p className="text-gray-600 text-center">
                역사적 건축물과 예술, 고급 다이닝을 선호하는 문화 탐험가형
              </p>
              <div className="flex gap-2 justify-center mt-3">
                <span className="px-3 py-1 bg-white rounded-full text-gray-700">🏛️ 역사</span>
                <span className="px-3 py-1 bg-white rounded-full text-gray-700">🎨 예술</span>
                <span className="px-3 py-1 bg-white rounded-full text-gray-700">🍽️ 미식</span>
              </div>
            </div>

            {similarStylePlaces.map((place, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                onClick={() => onSelectPlace(place.name)}
                className="cursor-pointer"
              >
                <RoundedCard className="hover:shadow-xl transition-shadow">
                  <div className="flex gap-4 mb-3">
                    <div className="w-24 h-24 rounded-2xl bg-gray-200 overflow-hidden flex-shrink-0">
                      <img
                        src={place.image}
                        alt={place.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-1">
                        <div>
                          <h4 className="mb-1">{place.name}</h4>
                          <p className="text-gray-600">{place.category}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                          <span>{place.rating}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-600">{place.distance}</span>
                        <span className="text-gray-400">·</span>
                        <Users className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-600">{place.likedBy}명 저장</span>
                      </div>
                    </div>
                  </div>

                  {/* Match Percentage */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-600">{place.reason}</span>
                    <div className="px-3 py-1 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full">
                      <span className="text-green-700">{place.matchPercentage}% 매칭</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button className="w-full h-12 bg-[#4A90E2] text-white rounded-full hover:bg-[#357ABD] transition-colors flex items-center justify-center gap-2">
                    <Bookmark className="w-4 h-4" />
                    <span>저장하기</span>
                  </button>
                </RoundedCard>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}

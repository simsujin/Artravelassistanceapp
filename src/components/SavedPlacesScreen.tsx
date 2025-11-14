import { Bookmark, Users, Star, MapPin, Trash2, List, Image } from 'lucide-react';
import { RoundedCard } from './ui/RoundedCard';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

interface SavedPlacesScreenProps {
  onSelectPlace: (place: string) => void;
}

const savedPlaces = [
  {
    name: '에펠탑',
    category: '랜드마크',
    country: '프랑스',
    city: '파리',
    image: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=400&q=80',
    rating: 4.8,
    distance: '1.2km',
    savedDate: '2일 전',
    tags: ['사진명소', '야경']
  },
  {
    name: '루브르 박물관',
    category: '박물관',
    country: '프랑스',
    city: '파리',
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=400&q=80',
    rating: 4.9,
    distance: '800m',
    savedDate: '3일 전',
    tags: ['예술', '역사']
  },
  {
    name: 'Le Jules Verne',
    category: '레스토랑',
    country: '프랑스',
    city: '파리',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&q=80',
    rating: 4.7,
    distance: '1.5km',
    savedDate: '5일 전',
    tags: ['미슐랭', '프렌치']
  },
  {
    name: '도쿄 타워',
    category: '랜드마크',
    country: '일본',
    city: '도쿄',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&q=80',
    rating: 4.6,
    distance: '2.3km',
    savedDate: '1주일 전',
    tags: ['야경', '전망대']
  },
  {
    name: '스시 사이토',
    category: '레스토랑',
    country: '일본',
    city: '도쿄',
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&q=80',
    rating: 4.9,
    distance: '1.8km',
    savedDate: '1주일 전',
    tags: ['스시', '오마카세']
  },
  {
    name: '센소지',
    category: '랜드마크',
    country: '일본',
    city: '도쿄',
    image: 'https://images.unsplash.com/photo-1542640244-7e672d6cef4e?w=400&q=80',
    rating: 4.7,
    distance: '3.1km',
    savedDate: '2주일 전',
    tags: ['사원', '문화']
  },
  {
    name: '맥도날드',
    category: '레스토랑',
    country: '일본',
    city: '도쿄',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400&q=80',
    rating: 4.2,
    distance: '350m',
    savedDate: '3일 전',
    tags: ['패스트푸드', '테리야키']
  },
  {
    name: '콜로세움',
    category: '랜드마크',
    country: '이탈리아',
    city: '로마',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400&q=80',
    rating: 4.9,
    distance: '900m',
    savedDate: '2주일 전',
    tags: ['역사', '고대']
  },
  {
    name: '트레비 분수',
    category: '랜드마크',
    country: '이탈리아',
    city: '로마',
    image: 'https://images.unsplash.com/photo-1525874684015-58379d421a52?w=400&q=80',
    rating: 4.7,
    distance: '1.1km',
    savedDate: '2주일 전',
    tags: ['사진명소', '로맨틱']
  },
  {
    name: 'Osteria Francescana',
    category: '레스토랑',
    country: '이탈리아',
    city: '모데나',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80',
    rating: 5.0,
    distance: '2.8km',
    savedDate: '3주일 전',
    tags: ['미슐랭', '이탈리안']
  },
  {
    name: '스타벅스',
    category: '카페',
    country: '이탈리아',
    city: '밀라노',
    image: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=400&q=80',
    rating: 4.3,
    distance: '290m',
    savedDate: '5일 전',
    tags: ['커피', '로스터리']
  },
  {
    name: '사그라다 파밀리아',
    category: '랜드마크',
    country: '스페인',
    city: '바르셀로나',
    image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=400&q=80',
    rating: 4.9,
    distance: '1.5km',
    savedDate: '3주일 전',
    tags: ['건축', '가우디']
  },
  {
    name: '구엘 공원',
    category: '랜드마크',
    country: '스페인',
    city: '바르셀로나',
    image: 'https://images.unsplash.com/photo-1579282240050-352db0a14c21?w=400&q=80',
    rating: 4.8,
    distance: '2.2km',
    savedDate: '1개월 전',
    tags: ['예술', '자연']
  },
  {
    name: '왓 아룬',
    category: '랜드마크',
    country: '태국',
    city: '방콕',
    image: 'https://images.unsplash.com/photo-1563492065213-f0c8c41da0ed?w=800&q=80',
    rating: 4.7,
    distance: '800m',
    savedDate: '1개월 전',
    tags: ['사원', '야경']
  },
  {
    name: '짜뚜짝 시장',
    category: '쇼핑',
    country: '태국',
    city: '방콕',
    image: 'https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?w=400&q=80',
    rating: 4.6,
    distance: '3.5km',
    savedDate: '1개월 전',
    tags: ['쇼핑', '먹거리']
  },
  {
    name: 'Jay Fai',
    category: '레스토랑',
    country: '태국',
    city: '방콕',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&q=80',
    rating: 4.8,
    distance: '1.2km',
    savedDate: '1개월 전',
    tags: ['미슐랭', '길거리음식']
  },
  {
    name: '파이브가이즈',
    category: '레스토랑',
    country: '미국',
    city: '뉴욕',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80',
    rating: 4.5,
    distance: '680m',
    savedDate: '4일 전',
    tags: ['버거', '프라이']
  },
  {
    name: '블루보틀',
    category: '카페',
    country: '미국',
    city: '샌프란시스코',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&q=80',
    rating: 4.6,
    distance: '420m',
    savedDate: '6일 전',
    tags: ['커피', '드립']
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
  const [viewMode, setViewMode] = useState<'list' | 'gallery'>('list');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Group places by country
  const placesByCountry = savedPlaces.reduce((acc, place) => {
    if (!acc[place.country]) {
      acc[place.country] = [];
    }
    acc[place.country].push(place);
    return acc;
  }, {} as Record<string, typeof savedPlaces>);

  return (
    <div className="w-full h-full bg-[#FAFAF8] overflow-y-auto pb-28">
      {/* Header */}
      <div className="sticky top-0 bg-white/95 backdrop-blur-md z-20 border-b border-gray-200">
        <div className="px-6 pt-12 pb-4">
          <div className="flex items-center justify-between mb-4">
            <h1>저장한 장소</h1>
            {/* View mode buttons - only show in 'saved' tab */}
            {selectedTab === 'saved' && (
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
                  onClick={() => setViewMode('gallery')}
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    viewMode === 'gallery' ? 'bg-[#4A90E2] text-white' : 'bg-[#F7F4EC] text-gray-600'
                  }`}
                >
                  <Image className="w-5 h-5" />
                </button>
              </div>
            )}
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
          <>
            {viewMode === 'gallery' ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                {Object.entries(placesByCountry).map(([country, places]) => (
                  <div key={country}>
                    {/* Country Header */}
                    <div className="mb-4">
                      <h3 className="mb-1">{country}</h3>
                      <p className="text-gray-600">{places.length}개 장소</p>
                    </div>

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-3 gap-2 mb-6">
                      {places.map((place, index) => {
                        const globalIndex = savedPlaces.indexOf(place);
                        return (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            onClick={() => setSelectedImage(globalIndex)}
                            className="cursor-pointer"
                          >
                            <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                              <img
                                src={place.image}
                                alt={place.name}
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                              <div className="absolute bottom-2 left-2 right-2">
                                <p className="text-white text-xs truncate">{place.name}</p>
                                <div className="flex items-center gap-1 mt-1">
                                  <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                                  <span className="text-white text-xs">{place.rating}</span>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
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
                  </motion.div>
                ))}
              </motion.div>
            )}
          </>
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

      {/* Gallery Fullscreen Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-50 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white z-10"
            >
              ✕
            </button>
            
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative w-full h-full flex items-center justify-center p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={savedPlaces[selectedImage].image}
                alt={savedPlaces[selectedImage].name}
                className="max-w-full max-h-full object-contain"
              />
              
              <div className="absolute bottom-12 left-0 right-0 px-6">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4">
                  <h3 className="mb-2">{savedPlaces[selectedImage].name}</h3>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span>{savedPlaces[selectedImage].rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600">{savedPlaces[selectedImage].distance}</span>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-3">
                    {savedPlaces[selectedImage].tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-[#F7F4EC] rounded-full text-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Navigation arrows */}
            {selectedImage > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(selectedImage - 1);
                }}
                className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white text-2xl"
              >
                ‹
              </button>
            )}
            {selectedImage < savedPlaces.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(selectedImage + 1);
                }}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white text-2xl"
              >
                ›
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
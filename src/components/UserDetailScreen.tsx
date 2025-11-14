import { ChevronLeft, MapPin, Star, Heart, Calendar } from 'lucide-react';
import { RoundedCard } from './ui/RoundedCard';
import { motion } from 'motion/react';

interface UserDetailScreenProps {
  user: {
    name: string;
    avatar: string;
    country: string;
  } | null;
  onBack: () => void;
  onSelectPlace: (place: string) => void;
}

// Mock data for places liked by users
const userLikedPlaces: Record<string, any[]> = {
  '김민준': [
    {
      name: '에펠탑',
      category: '랜드마크',
      image: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=400&q=80',
      rating: 4.8,
      visitedDate: '2024년 10월',
      tags: ['#야경이멋져요', '#사진명소']
    },
    {
      name: '몽마르트 언덕',
      category: '랜드마크',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&q=80',
      rating: 4.7,
      visitedDate: '2024년 10월',
      tags: ['#예쁜카페', '#야경이멋져요']
    },
    {
      name: '베르사유 궁전',
      category: '랜드마크',
      image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=400&q=80',
      rating: 4.9,
      visitedDate: '2024년 9월',
      tags: ['#역사적가치', '#꼭가봐야해요']
    },
  ],
  'Sarah Kim': [
    {
      name: '에펠탑',
      category: '랜드마크',
      image: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=400&q=80',
      rating: 4.8,
      visitedDate: '2024년 11월',
      tags: ['#야경이멋져요', '#로맨틱해요']
    },
    {
      name: '루브르 박물관',
      category: '박물관',
      image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=400&q=80',
      rating: 4.9,
      visitedDate: '2024년 11월',
      tags: ['#예술', '#역사적가치']
    },
  ],
  '佐藤健': [
    {
      name: '에펠탑',
      category: '랜드마크',
      image: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=400&q=80',
      rating: 4.8,
      visitedDate: '2024년 8월',
      tags: ['#야경이멋져요', '#파리여행필수']
    },
    {
      name: '개선문',
      category: '랜드마크',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&q=80',
      rating: 4.6,
      visitedDate: '2024년 8월',
      tags: ['#역사적가치', '#사진명소']
    },
  ],
  'default': [
    {
      name: '에펠탑',
      category: '랜드마크',
      image: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=400&q=80',
      rating: 4.8,
      visitedDate: '2024년 10월',
      tags: ['#야경이멋져요', '#사진명소']
    },
  ],
};

export function UserDetailScreen({ user, onBack, onSelectPlace }: UserDetailScreenProps) {
  if (!user) {
    onBack();
    return null;
  }

  const likedPlaces = userLikedPlaces[user.name] || userLikedPlaces['default'];

  return (
    <div className="w-full h-full bg-[#FAFAF8] overflow-y-auto pb-28">
      {/* Header */}
      <div className="sticky top-0 bg-gradient-to-b from-[#4A90E2] to-[#357ABD] z-20">
        <div className="px-6 pt-12 pb-8">
          <button
            onClick={onBack}
            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-6"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* User Profile */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-4xl shadow-lg">
              {user.avatar}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h2 className="text-white">{user.name}</h2>
                <span className="text-2xl">{user.country}</span>
              </div>
              <p className="text-white/80">여행 탐험가</p>
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-3">
            <div className="flex-1 bg-white/20 backdrop-blur-md rounded-2xl p-4">
              <p className="text-white/80 mb-1 text-center">방문 장소</p>
              <h3 className="text-white text-center">{likedPlaces.length}</h3>
            </div>
            <div className="flex-1 bg-white/20 backdrop-blur-md rounded-2xl p-4">
              <p className="text-white/80 mb-1 text-center">좋아요</p>
              <h3 className="text-white text-center">{likedPlaces.reduce((sum, place) => sum + place.tags.length, 0)}</h3>
            </div>
            <div className="flex-1 bg-white/20 backdrop-blur-md rounded-2xl p-4">
              <p className="text-white/80 mb-1 text-center">도움됨</p>
              <h3 className="text-white text-center">124</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pt-6">
        <div className="flex items-center justify-between mb-4">
          <h3>좋아요 누른 장소</h3>
          <div className="flex items-center gap-1 text-gray-600">
            <Heart className="w-4 h-4 fill-pink-500 text-pink-500" />
            <span>{likedPlaces.length}</span>
          </div>
        </div>

        {/* Liked Places Grid */}
        <div className="space-y-4">
          {likedPlaces.map((place, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
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
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span>{place.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600">{place.visitedDate}</span>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      {place.tags.map((tag: string, i: number) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-pink-50 border border-pink-200 rounded-full text-pink-600 text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </RoundedCard>
            </motion.div>
          ))}
        </div>

        {/* Travel Style Info */}
        <div className="mt-6 mb-6">
          <RoundedCard className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
            <h4 className="mb-3 text-center">여행 스타일</h4>
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="px-3 py-1 bg-white rounded-full text-gray-700 text-xs">🏛️ 문화 탐험</span>
              <span className="px-3 py-1 bg-white rounded-full text-gray-700 text-xs">📸 사진 명소</span>
              <span className="px-3 py-1 bg-white rounded-full text-gray-700 text-xs">🌃 야경</span>
            </div>
          </RoundedCard>
        </div>
      </div>
    </div>
  );
}

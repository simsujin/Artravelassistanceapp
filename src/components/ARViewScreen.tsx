import { ArrowLeft, Navigation, Clock, Star, UtensilsCrossed, Landmark } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ARViewScreenProps {
  onBack: () => void;
  onSelectLandmark: (landmark: string) => void;
  onHistoricalView: () => void;
  onSelectRestaurant?: (restaurant: string) => void;
}

const restaurants = [
  { id: 1, name: 'Le Petit Bistro', type: '프랑스 비스트로', rating: 4.5, distance: '120m', x: 25, y: 35 },
  { id: 2, name: 'Café de Paris', type: '카페', rating: 4.3, distance: '200m', x: 65, y: 45 },
  { id: 3, name: 'La Boulangerie', type: '베이커리', rating: 4.7, distance: '80m', x: 40, y: 60 },
];

const landmarks = [
  { id: 1, name: '에펠탑', distance: '850m', x: 50, y: 30, icon: '🗼' },
  { id: 2, name: '루브르 박물관', distance: '1.2km', x: 70, y: 50, icon: '🏛️' },
  { id: 3, name: '노트르담 대성당', distance: '2.1km', x: 30, y: 55, icon: '⛪' },
];

export function ARViewScreen({ onBack, onSelectLandmark, onHistoricalView, onSelectRestaurant }: ARViewScreenProps) {
  const [showSafetyWarning, setShowSafetyWarning] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSafetyWarning(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-full bg-black">
      {/* Camera View Background */}
      <ImageWithFallback
        src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80"
        alt="AR Camera View"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Back Button */}
      <button
        onClick={onBack}
        className="absolute top-12 left-6 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center z-10"
      >
        <ArrowLeft className="w-5 h-5 text-white" />
      </button>

      {/* AR Overlays */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Landmark Circular Icons */}
        {landmarks.map((landmark, index) => (
          <motion.div
            key={landmark.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 + index * 0.1, type: 'spring' }}
            className="absolute pointer-events-auto"
            style={{ left: `${landmark.x}%`, top: `${landmark.y}%` }}
          >
            <button
              onClick={() => onSelectLandmark(landmark.name)}
              className="relative group"
            >
              {/* Circular Icon */}
              <div className="w-20 h-20 rounded-full bg-white/95 backdrop-blur-md shadow-lg hover:shadow-2xl transition-all hover:scale-110 flex flex-col items-center justify-center border-2 border-[#4A90E2]">
                <span className="text-3xl mb-1">{landmark.icon}</span>
              </div>
              
              {/* Distance Label */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <div className="bg-black/70 backdrop-blur-md rounded-full px-3 py-1">
                  <span className="text-white text-xs">{landmark.distance}</span>
                </div>
              </div>

              {/* Pulsing Ring Effect */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-[#4A90E2]"
                animate={{ scale: [1, 1.3, 1], opacity: [0.8, 0, 0.8] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </button>
          </motion.div>
        ))}

        {/* Restaurant Bubble Cards */}
        {restaurants.map((restaurant, index) => (
          <motion.div
            key={restaurant.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            className="absolute pointer-events-auto"
            style={{ left: `${restaurant.x}%`, top: `${restaurant.y}%` }}
          >
            <div
              onClick={() => onSelectRestaurant?.(restaurant.name)}
              className="relative cursor-pointer group"
            >
              {/* Speech bubble */}
              <div className="bg-white/95 backdrop-blur-md rounded-[18px] px-4 py-3 shadow-lg hover:shadow-xl transition-shadow min-w-[180px]">
                <div className="flex items-center gap-2 mb-1">
                  <UtensilsCrossed className="w-4 h-4 text-[#4A90E2]" />
                  <h4>{restaurant.name}</h4>
                </div>
                <p className="text-gray-600 mb-2">{restaurant.type}</p>
                <div className="flex items-center gap-3 text-gray-600">
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    <span>{restaurant.rating}</span>
                  </div>
                  <span>·</span>
                  <span>{restaurant.distance}</span>
                </div>
              </div>
              {/* Triangle pointer */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white/95" />
            </div>
          </motion.div>
        ))}

        {/* Direction Arrow */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center">
            <Navigation className="w-12 h-12 text-[#4A90E2] drop-shadow-lg" />
            <div className="mt-2 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md">
              <p className="text-white text-center">850m · 북쪽</p>
            </div>
          </div>
        </motion.div>

        {/* Historical View Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute top-1/3 right-6 pointer-events-auto"
        >
          <button
            onClick={onHistoricalView}
            className="bg-white/95 backdrop-blur-md rounded-[18px] p-3 shadow-lg"
          >
            <p className="text-[#4A90E2] text-center">🕰️ 과거 모습 보기</p>
          </button>
        </motion.div>
      </div>

      {/* Safety Warning */}
      {showSafetyWarning && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-24 left-6 right-6"
        >
          <div className="bg-amber-500 text-white rounded-[18px] px-4 py-3 shadow-lg">
            <p className="text-center">⚠️ 이동 시 주변을 확인해주세요</p>
          </div>
        </motion.div>
      )}
    </div>
  );
}
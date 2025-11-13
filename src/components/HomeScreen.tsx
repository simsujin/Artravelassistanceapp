import { Camera, Search, Landmark, UtensilsCrossed, BookOpen, Star, MapPin, Navigation as NavigationIcon } from 'lucide-react';
import { RoundedCard } from './ui/RoundedCard';
import { CategoryButton } from './ui/CategoryButton';
import { motion, useAnimation, PanInfo } from 'motion/react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { AnimatePresence } from 'framer-motion';

interface HomeScreenProps {
  onStartAR: () => void;
  onSelectLandmark: (landmark: string) => void;
}

const SHEET_POSITIONS = {
  min: 120,    // Minimized - only peek visible
  mid: 500,    // Middle position
  max: 850     // Full screen
};

export function HomeScreen({ onStartAR, onSelectLandmark }: HomeScreenProps) {
  const [sheetHeight, setSheetHeight] = useState(SHEET_POSITIONS.mid);
  const [mapOffset, setMapOffset] = useState({ x: 0, y: 0 });
  const controls = useAnimation();
  const mapControls = useAnimation();

  const handleDragEnd = (event: any, info: PanInfo) => {
    const velocity = info.velocity.y;
    const offset = info.offset.y;

    let newHeight = sheetHeight - offset;

    // Determine which position to snap to based on velocity and position
    if (velocity > 500) {
      // Fast downward swipe
      newHeight = SHEET_POSITIONS.min;
    } else if (velocity < -500) {
      // Fast upward swipe
      newHeight = SHEET_POSITIONS.max;
    } else {
      // Snap to nearest position
      const distances = Object.values(SHEET_POSITIONS).map(pos => 
        Math.abs(newHeight - pos)
      );
      const minDistance = Math.min(...distances);
      const nearestPosition = Object.values(SHEET_POSITIONS)[distances.indexOf(minDistance)];
      newHeight = nearestPosition;
    }

    setSheetHeight(newHeight);
    controls.start({ y: 0 });
  };

  const handleMapDragEnd = (event: any, info: PanInfo) => {
    setMapOffset({
      x: mapOffset.x + info.offset.x,
      y: mapOffset.y + info.offset.y
    });
    mapControls.start({ x: 0, y: 0 });
  };

  return (
    <div className="w-full h-full bg-[#FAFAF8] relative overflow-hidden">
      {/* 2D Map Background - Draggable */}
      <motion.div 
        drag
        dragConstraints={{ left: -200, right: 200, top: -200, bottom: 200 }}
        dragElastic={0.1}
        onDragEnd={handleMapDragEnd}
        animate={mapControls}
        style={{ 
          x: mapOffset.x, 
          y: mapOffset.y,
          cursor: 'grab'
        }}
        whileTap={{ cursor: 'grabbing' }}
        className="absolute inset-0 bg-[#E8F4F8]"
      >
        {/* Map tiles simulation */}
        <svg className="w-full h-full" viewBox="0 0 430 932">
          {/* Roads */}
          <line x1="50" y1="0" x2="50" y2="932" stroke="#CBD5E1" strokeWidth="4" />
          <line x1="150" y1="0" x2="150" y2="932" stroke="#CBD5E1" strokeWidth="3" />
          <line x1="280" y1="0" x2="280" y2="932" stroke="#CBD5E1" strokeWidth="6" />
          <line x1="380" y1="0" x2="380" y2="932" stroke="#CBD5E1" strokeWidth="4" />
          <line x1="0" y1="200" x2="430" y2="200" stroke="#CBD5E1" strokeWidth="4" />
          <line x1="0" y1="400" x2="430" y2="400" stroke="#CBD5E1" strokeWidth="5" />
          <line x1="0" y1="600" x2="430" y2="600" stroke="#CBD5E1" strokeWidth="4" />
          <line x1="0" y1="800" x2="430" y2="800" stroke="#CBD5E1" strokeWidth="3" />
          
          {/* Parks (green areas) */}
          <rect x="60" y="150" width="80" height="80" fill="#A7F3D0" opacity="0.6" rx="8" />
          <rect x="300" y="450" width="100" height="100" fill="#A7F3D0" opacity="0.6" rx="8" />
          
          {/* Buildings */}
          <rect x="160" y="250" width="60" height="60" fill="#94A3B8" opacity="0.5" rx="4" />
          <rect x="70" y="420" width="50" height="50" fill="#94A3B8" opacity="0.5" rx="4" />
          <rect x="320" y="220" width="70" height="70" fill="#94A3B8" opacity="0.5" rx="4" />
        </svg>

        {/* Location Markers on Map */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="absolute top-[30%] left-[50%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        >
          <div className="relative">
            <MapPin className="w-10 h-10 text-[#EF4444] fill-[#EF4444] drop-shadow-lg" />
            <motion.div
              className="absolute inset-0"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-10 h-10 rounded-full bg-[#EF4444] opacity-30" />
            </motion.div>
          </div>
        </motion.div>

        {/* Restaurant Markers */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3 }}
          className="absolute top-[45%] left-[35%] pointer-events-none"
        >
          <div className="w-8 h-8 rounded-full bg-[#4A90E2] border-2 border-white shadow-lg flex items-center justify-center">
            <UtensilsCrossed className="w-4 h-4 text-white" />
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4 }}
          className="absolute top-[55%] left-[65%] pointer-events-none"
        >
          <div className="w-8 h-8 rounded-full bg-[#4A90E2] border-2 border-white shadow-lg flex items-center justify-center">
            <UtensilsCrossed className="w-4 h-4 text-white" />
          </div>
        </motion.div>

        {/* Landmark Markers */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.35 }}
          className="absolute top-[25%] left-[70%] pointer-events-none"
        >
          <div className="w-8 h-8 rounded-full bg-[#F59E0B] border-2 border-white shadow-lg flex items-center justify-center">
            <Landmark className="w-4 h-4 text-white" />
          </div>
        </motion.div>
      </motion.div>

      {/* GPS Current Location Button */}
      <div className="absolute top-32 right-6 z-10">
        <button className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center border border-gray-200 hover:bg-gray-50 transition-colors">
          <NavigationIcon className="w-6 h-6 text-[#4A90E2]" />
        </button>
      </div>

      {/* Current Location Indicator (GPS) - Hidden when sheet is extended */}
      <AnimatePresence>
        {sheetHeight < SHEET_POSITIONS.max && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute top-[65%] left-[50%] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="relative"
            >
              <div className="w-5 h-5 rounded-full bg-[#4A90E2] border-4 border-white shadow-lg" />
              <motion.div
                className="absolute inset-0 rounded-full bg-[#4A90E2] opacity-20"
                animate={{ 
                  scale: [1, 2.5, 1],
                  opacity: [0.3, 0, 0.3]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full shadow-md">
              <p className="text-xs text-[#4A90E2]">현재 위치</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Header Bar */}
      <div className="absolute top-0 left-0 right-0 px-6 pt-12 pb-4 bg-gradient-to-b from-black/30 to-transparent z-10 pointer-events-none">
        <h1 className="text-white drop-shadow-lg text-center">Travel Assist AR</h1>
      </div>

      {/* Bottom Sheet */}
      <motion.div
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={0.1}
        onDragEnd={handleDragEnd}
        animate={controls}
        initial={{ y: 300 }}
        className="absolute bottom-0 left-0 right-0 bg-white rounded-t-[30px] shadow-2xl pb-28"
        style={{ height: `${sheetHeight}px` }}
      >
        {/* Drag Handle */}
        <div className="flex justify-center pt-3 pb-4 cursor-grab active:cursor-grabbing">
          <div className="w-12 h-1 bg-gray-300 rounded-full" />
        </div>

        <div className="px-6 overflow-y-auto" style={{ maxHeight: `${sheetHeight - 120}px` }}>
          <h2 className="mb-2 text-center">안녕하세요 👋</h2>
          <p className="text-gray-600 mb-6 text-center">어떤 정보를 찾고 계신가요?</p>

          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="장소, 레스토랑, 메뉴 검색..."
              className="w-full h-14 pl-12 pr-4 rounded-full bg-[#F7F4EC] border border-gray-200 outline-none focus:ring-2 focus:ring-[#4A90E2] text-center"
            />
          </div>

          {/* Quick Categories */}
          <h3 className="mb-4 text-center">빠른 카테고리</h3>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <CategoryButton
              icon={Landmark}
              label="랜드마크"
              onClick={onStartAR}
            />
            <CategoryButton
              icon={UtensilsCrossed}
              label="레스토랑"
              onClick={onStartAR}
            />
            <CategoryButton
              icon={BookOpen}
              label="메뉴 스캔"
              onClick={onStartAR}
            />
            <CategoryButton
              icon={Star}
              label="인기 장소"
              onClick={onStartAR}
            />
          </div>

          {/* Popular Places */}
          <h3 className="mb-4 text-center">인기 장소</h3>
          <div className="space-y-3 mb-6">
            <RoundedCard
              onClick={() => onSelectLandmark('Eiffel Tower')}
              className="cursor-pointer hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-4">
                <div className="w-20 h-20 rounded-2xl bg-gray-200 overflow-hidden flex-shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=400&q=80"
                    alt="Eiffel Tower"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4>에펠탑</h4>
                  <p className="text-gray-600 mt-1">파리의 상징적인 랜드마크</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-gray-600">4.8 · 1.2km</span>
                  </div>
                </div>
              </div>
            </RoundedCard>

            <RoundedCard
              onClick={() => onSelectLandmark('Louvre Museum')}
              className="cursor-pointer hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-4">
                <div className="w-20 h-20 rounded-2xl bg-gray-200 overflow-hidden flex-shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=400&q=80"
                    alt="Louvre"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4>루브르 박물관</h4>
                  <p className="text-gray-600 mt-1">세계 최대 미술관</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-gray-600">4.9 · 800m</span>
                  </div>
                </div>
              </div>
            </RoundedCard>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
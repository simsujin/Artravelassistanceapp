import { ArrowLeft, Scan } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface MenuScanScreenProps {
  onBack: () => void;
  onSelectMenu: () => void;
}

export function MenuScanScreen({ onBack, onSelectMenu }: MenuScanScreenProps) {
  return (
    <div className="relative w-full h-full bg-black">
      {/* Camera View */}
      <ImageWithFallback
        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80"
        alt="Menu"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Back Button */}
      <button
        onClick={onBack}
        className="absolute top-12 left-6 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center z-10"
      >
        <ArrowLeft className="w-5 h-5 text-white" />
      </button>

      {/* Scan Frame */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-80 h-64 border-4 border-[#4A90E2] rounded-3xl relative"
        >
          <div className="absolute -top-2 -left-2 w-8 h-8 border-t-4 border-l-4 border-white rounded-tl-2xl" />
          <div className="absolute -top-2 -right-2 w-8 h-8 border-t-4 border-r-4 border-white rounded-tr-2xl" />
          <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-4 border-l-4 border-white rounded-bl-2xl" />
          <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-4 border-r-4 border-white rounded-br-2xl" />
        </motion.div>
      </div>

      {/* Instruction */}
      <div className="absolute top-1/4 left-6 right-6">
        <div className="bg-black/60 backdrop-blur-md rounded-[18px] px-4 py-3">
          <p className="text-white text-center">📸 메뉴를 프레임 안에 맞춰주세요</p>
        </div>
      </div>

      {/* Bottom Sheet with Detected Menu */}
      <motion.div
        initial={{ y: 400 }}
        animate={{ y: 0 }}
        transition={{ delay: 1, type: 'spring', damping: 20 }}
        className="absolute bottom-0 left-0 right-0 p-6"
      >
        <div className="bg-white rounded-t-[30px] p-6 shadow-2xl max-h-[400px] overflow-y-auto">
          <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-6" />
          
          <h3 className="mb-4">메뉴 인식됨</h3>

          <div
            onClick={onSelectMenu}
            className="bg-[#F7F4EC] rounded-[18px] p-4 mb-3 cursor-pointer hover:bg-gray-100 transition-colors"
          >
            <div className="flex gap-4">
              <div className="w-20 h-20 rounded-2xl bg-gray-200 overflow-hidden flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80"
                  alt="Salad"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h4>Caesar Salad</h4>
                <p className="text-gray-600 mt-1">시저 샐러드</p>
                <div className="flex gap-2 mt-2">
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-center">🥗 샐러드</span>
                  <span className="px-2 py-1 bg-amber-100 text-amber-700 rounded-full text-center">⚠️ 유제품</span>
                </div>
              </div>
            </div>
          </div>

          <div
            onClick={onSelectMenu}
            className="bg-[#F7F4EC] rounded-[18px] p-4 cursor-pointer hover:bg-gray-100 transition-colors"
          >
            <div className="flex gap-4">
              <div className="w-20 h-20 rounded-2xl bg-gray-200 overflow-hidden flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80"
                  alt="Pizza"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h4>Margherita Pizza</h4>
                <p className="text-gray-600 mt-1">마르게리타 피자</p>
                <div className="flex gap-2 mt-2">
                  <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-center">🍕 피자</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-center">한식: 치즈불고기</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
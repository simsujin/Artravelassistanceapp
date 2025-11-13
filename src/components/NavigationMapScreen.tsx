import { ArrowLeft, Navigation, Camera } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface NavigationMapScreenProps {
  onBack: () => void;
  onARView: () => void;
}

export function NavigationMapScreen({ onBack, onARView }: NavigationMapScreenProps) {
  return (
    <div className="relative w-full h-full">
      {/* Map Background */}
      <ImageWithFallback
        src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80"
        alt="Map"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Simple map overlay simulation */}
      <div className="absolute inset-0 bg-[#E8F4F8]">
        <svg className="w-full h-full" viewBox="0 0 430 932">
          {/* Roads */}
          <line x1="50" y1="0" x2="50" y2="932" stroke="#CBD5E1" strokeWidth="4" />
          <line x1="200" y1="0" x2="200" y2="932" stroke="#CBD5E1" strokeWidth="6" />
          <line x1="380" y1="0" x2="380" y2="932" stroke="#CBD5E1" strokeWidth="4" />
          <line x1="0" y1="300" x2="430" y2="300" stroke="#CBD5E1" strokeWidth="4" />
          <line x1="0" y1="600" x2="430" y2="600" stroke="#CBD5E1" strokeWidth="6" />
          
          {/* Route line */}
          <path
            d="M 215 800 Q 250 700, 215 600 T 215 400 Q 180 300, 215 200"
            fill="none"
            stroke="#4A90E2"
            strokeWidth="6"
            strokeDasharray="10,5"
          />
          
          {/* Current location */}
          <circle cx="215" cy="800" r="12" fill="#4A90E2" stroke="white" strokeWidth="3" />
          
          {/* Destination */}
          <g transform="translate(215, 200)">
            <circle r="20" fill="#F87171" opacity="0.3" />
            <circle r="12" fill="#EF4444" stroke="white" strokeWidth="3" />
          </g>
        </svg>
      </div>

      {/* Back Button */}
      <button
        onClick={onBack}
        className="absolute top-12 left-6 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center z-10"
      >
        <ArrowLeft className="w-5 h-5" />
      </button>

      {/* Distance info */}
      <div className="absolute top-12 right-6 px-4 py-2 rounded-full bg-white shadow-lg">
        <p className="text-center">850m · 11분</p>
      </div>

      {/* Bottom Sheet */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="bg-white rounded-[22px] p-6 shadow-2xl">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-[#4A90E2]/10 flex items-center justify-center flex-shrink-0">
              <Navigation className="w-6 h-6 text-[#4A90E2]" />
            </div>
            <div className="flex-1">
              <h3 className="mb-1">에펠탑</h3>
              <p className="text-gray-600">Champ de Mars, 5 Av. Anatole France</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-[#F7F4EC] rounded-[18px] p-4 text-center">
              <p className="text-gray-600 mb-1">거리</p>
              <p>850m</p>
            </div>
            <div className="bg-[#F7F4EC] rounded-[18px] p-4 text-center">
              <p className="text-gray-600 mb-1">예상 시간</p>
              <p>11분</p>
            </div>
          </div>

          <button
            onClick={onARView}
            className="w-full h-12 rounded-full bg-[#4A90E2] text-white hover:bg-[#357ABD] transition-colors flex items-center justify-center gap-2"
          >
            <Camera className="w-5 h-5" />
            <span>AR로 보기</span>
          </button>
        </div>
      </div>
    </div>
  );
}
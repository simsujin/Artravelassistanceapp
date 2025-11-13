import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { Slider } from './ui/slider';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HistoricalARScreenProps {
  onBack: () => void;
}

export function HistoricalARScreen({ onBack }: HistoricalARScreenProps) {
  const [opacity, setOpacity] = useState([50]);

  return (
    <div className="relative w-full h-full bg-black">
      {/* Current View */}
      <ImageWithFallback
        src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80"
        alt="Current view"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Historical Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-300"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=800&q=80)',
          opacity: opacity[0] / 100,
        }}
      />

      {/* Sepia overlay for historical effect */}
      <div
        className="absolute inset-0 bg-amber-900/30 pointer-events-none"
        style={{ opacity: opacity[0] / 100 }}
      />

      {/* Back Button */}
      <button
        onClick={onBack}
        className="absolute top-12 left-6 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center z-10"
      >
        <ArrowLeft className="w-5 h-5 text-white" />
      </button>

      {/* Year Indicator */}
      <div className="absolute top-12 right-6 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md">
        <p className="text-white">
          {opacity[0] > 50 ? '1950s' : '2024'}
        </p>
      </div>

      {/* Bottom Slider Control */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="bg-white/95 backdrop-blur-md rounded-[22px] p-6 shadow-2xl">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-600">현재</span>
            <span className="text-gray-600">과거</span>
          </div>
          
          <Slider
            value={opacity}
            onValueChange={setOpacity}
            min={0}
            max={100}
            step={1}
            className="w-full"
          />

          <p className="text-center text-gray-600 mt-4">
            슬라이더를 움직여 과거와 현재를 비교하세요
          </p>
        </div>
      </div>
    </div>
  );
}

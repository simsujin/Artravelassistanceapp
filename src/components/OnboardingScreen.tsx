import { useState } from 'react';
import { Camera, MapPin, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';

interface OnboardingScreenProps {
  onNext: () => void;
}

const slides = [
  {
    icon: Camera,
    title: '카메라로 즉시 인식',
    description: '장소, 메뉴, 표지판을 카메라로 비추면\nAR로 정보를 바로 확인할 수 있어요',
  },
  {
    icon: MapPin,
    title: '방문자 기반 추천',
    description: '같은 장소를 방문한 사람들이\n다음으로 간 곳을 추천해드려요',
  },
  {
    icon: Globe,
    title: '메뉴 번역 & 알레르기 정보',
    description: '외국어 메뉴를 한국어로 번역하고\n알레르기 성분까지 확인하세요',
  },
];

export function OnboardingScreen({ onNext }: OnboardingScreenProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onNext();
    }
  };

  const slide = slides[currentSlide];
  const Icon = slide.icon;

  return (
    <div className="relative w-full h-full bg-[#FAFAF8] flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center"
          >
            <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center mb-12 shadow-lg">
              <Icon className="w-16 h-16 text-[#4A90E2]" />
            </div>
            
            <h2 className="text-center mb-6">{slide.title}</h2>
            <p className="text-center text-gray-600 whitespace-pre-line">
              {slide.description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="px-8 pb-12">
        <div className="flex justify-center gap-2 mb-8">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide ? 'w-8 bg-[#4A90E2]' : 'w-2 bg-gray-300'
              }`}
            />
          ))}
        </div>

        <Button 
          onClick={handleNext}
          className="w-full h-14 rounded-full bg-[#4A90E2] hover:bg-[#357ABD]"
        >
          {currentSlide < slides.length - 1 ? '다음' : '시작하기'}
        </Button>
      </div>
    </div>
  );
}
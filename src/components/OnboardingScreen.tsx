import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface OnboardingScreenProps {
  onComplete: () => void;
}

const genders = [
  { value: 'male', label: '남성', emoji: '👨' },
  { value: 'female', label: '여성', emoji: '👩' },
  { value: 'other', label: '기타', emoji: '🧑' },
  { value: 'private', label: '선택 안함', emoji: '✨' },
];

const ageGroups = [
  { value: '20s', label: '20대' },
  { value: '30s', label: '30대' },
  { value: '40s', label: '40대' },
  { value: '50s', label: '50대' },
  { value: '60plus', label: '60대 이상' },
];

const travelStyles = [
  { value: 'culture', label: '문화 탐험', emoji: '🏛️', description: '박물관, 역사 유적지' },
  { value: 'food', label: '미식 여행', emoji: '🍽️', description: '맛집, 로컬 푸드' },
  { value: 'nature', label: '자연 감상', emoji: '🌿', description: '공원, 자연 경관' },
  { value: 'shopping', label: '쇼핑', emoji: '🛍️', description: '쇼핑몰, 시장' },
  { value: 'photo', label: '사진 명소', emoji: '📸', description: '인스타그래머블' },
  { value: 'nightlife', label: '나이트라이프', emoji: '🌃', description: '바, 클럽, 야경' },
];

const languages = [
  { value: 'ko', label: '한국어', flag: '🇰🇷' },
  { value: 'en', label: 'English', flag: '🇺🇸' },
  { value: 'ja', label: '日本語', flag: '🇯🇵' },
  { value: 'zh', label: '中文', flag: '🇨🇳' },
  { value: 'es', label: 'Español', flag: '🇪🇸' },
  { value: 'fr', label: 'Français', flag: '🇫🇷' },
];

export function OnboardingScreen({ onComplete }: OnboardingScreenProps) {
  const [step, setStep] = useState(0);
  const [gender, setGender] = useState('');
  const [ageGroup, setAgeGroup] = useState('');
  const [travelStyle, setTravelStyle] = useState<string[]>([]);
  const [language, setLanguage] = useState('ko');

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Save preferences and complete onboarding
      onComplete();
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const toggleTravelStyle = (value: string) => {
    setTravelStyle(prev =>
      prev.includes(value)
        ? prev.filter(s => s !== value)
        : [...prev, value]
    );
  };

  const canProceed = () => {
    switch (step) {
      case 0:
        return gender !== '';
      case 1:
        return ageGroup !== '';
      case 2:
        return travelStyle.length > 0;
      case 3:
        return language !== '';
      default:
        return false;
    }
  };

  const steps = [
    {
      title: '성별을 선택해 주세요',
      subtitle: '맞춤형 추천을 위해 사용됩니다',
      content: (
        <div className="grid grid-cols-2 gap-4">
          {genders.map((item) => (
            <motion.button
              key={item.value}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setGender(item.value)}
              className={`p-6 rounded-[22px] border-2 transition-all ${
                gender === item.value
                  ? 'bg-[#4A90E2] border-[#4A90E2] text-white'
                  : 'bg-white border-gray-200 hover:border-[#4A90E2]'
              }`}
            >
              <div className="text-4xl mb-2">{item.emoji}</div>
              <h4>{item.label}</h4>
            </motion.button>
          ))}
        </div>
      ),
    },
    {
      title: '연령대를 선택해 주세요',
      subtitle: '더 나은 추천을 위해 사용됩니다',
      content: (
        <div className="space-y-3">
          {ageGroups.map((item) => (
            <motion.button
              key={item.value}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setAgeGroup(item.value)}
              className={`w-full p-5 rounded-[20px] border-2 transition-all ${
                ageGroup === item.value
                  ? 'bg-[#4A90E2] border-[#4A90E2] text-white'
                  : 'bg-white border-gray-200 hover:border-[#4A90E2]'
              }`}
            >
              <h4>{item.label}</h4>
            </motion.button>
          ))}
        </div>
      ),
    },
    {
      title: '여행 스타일을 선택해 주세요',
      subtitle: '여러 개 선택 가능합니다',
      content: (
        <div className="grid grid-cols-2 gap-4">
          {travelStyles.map((item) => (
            <motion.button
              key={item.value}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => toggleTravelStyle(item.value)}
              className={`p-5 rounded-[20px] border-2 transition-all ${
                travelStyle.includes(item.value)
                  ? 'bg-[#4A90E2] border-[#4A90E2] text-white'
                  : 'bg-white border-gray-200 hover:border-[#4A90E2]'
              }`}
            >
              <div className="text-3xl mb-2">{item.emoji}</div>
              <h4 className="mb-1">{item.label}</h4>
              <p className={`text-xs ${
                travelStyle.includes(item.value) ? 'text-white/80' : 'text-gray-500'
              }`}>
                {item.description}
              </p>
            </motion.button>
          ))}
        </div>
      ),
    },
    {
      title: '언어를 선택해 주세요',
      subtitle: '앱 사용 언어를 설정합니다',
      content: (
        <div className="space-y-3">
          {languages.map((item) => (
            <motion.button
              key={item.value}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setLanguage(item.value)}
              className={`w-full p-5 rounded-[20px] border-2 transition-all flex items-center gap-4 ${
                language === item.value
                  ? 'bg-[#4A90E2] border-[#4A90E2] text-white'
                  : 'bg-white border-gray-200 hover:border-[#4A90E2]'
              }`}
            >
              <div className="text-3xl">{item.flag}</div>
              <h4>{item.label}</h4>
            </motion.button>
          ))}
        </div>
      ),
    },
  ];

  return (
    <div className="w-full h-full bg-gradient-to-b from-[#4A90E2] to-[#357ABD] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-40 h-40 rounded-full bg-white" />
        <div className="absolute bottom-20 left-10 w-60 h-60 rounded-full bg-white" />
        <div className="absolute top-1/2 left-1/3 w-32 h-32 rounded-full bg-white" />
      </div>

      <div className="relative z-10 w-full h-full flex flex-col">
        {/* Progress Bar */}
        <div className="px-6 pt-12 pb-6">
          <div className="flex gap-2">
            {steps.map((_, index) => (
              <div
                key={index}
                className="flex-1 h-1.5 rounded-full bg-white/30 overflow-hidden"
              >
                <motion.div
                  className="h-full bg-white"
                  initial={{ width: '0%' }}
                  animate={{ width: index <= step ? '100%' : '0%' }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col px-6 pb-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="flex-1 flex flex-col"
            >
              {/* Title */}
              <div className="mb-8">
                <h1 className="text-white mb-2 text-center">{steps[step].title}</h1>
                <p className="text-white/80 text-center">{steps[step].subtitle}</p>
              </div>

              {/* Step Content */}
              <div className="flex-1 overflow-y-auto">
                {steps[step].content}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Buttons */}
        <div className="px-6 pb-8">
          <div className="flex gap-3">
            {step > 0 && (
              <button
                onClick={handleBack}
                className="px-6 h-14 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-colors"
              >
                이전
              </button>
            )}
            <button
              onClick={handleNext}
              disabled={!canProceed()}
              className={`flex-1 h-14 rounded-full flex items-center justify-center gap-2 transition-all ${
                canProceed()
                  ? 'bg-white text-[#4A90E2] hover:shadow-lg'
                  : 'bg-white/20 text-white/50 cursor-not-allowed'
              }`}
            >
              <span>{step === 3 ? '시작하기' : '다음'}</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

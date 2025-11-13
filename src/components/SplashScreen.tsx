import { useEffect } from 'react';
import { Plane, Luggage, Building2 } from 'lucide-react';
import { motion } from 'motion/react';

interface SplashScreenProps {
  onNext: () => void;
}

export function SplashScreen({ onNext }: SplashScreenProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onNext();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onNext]);

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-[#4A90E2] to-[#357ABD] flex flex-col items-center justify-center">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-6 mb-12"
      >
        <Plane className="w-16 h-16 text-white" />
        <Luggage className="w-16 h-16 text-white" />
        <Building2 className="w-16 h-16 text-white" />
      </motion.div>
      
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-white text-center px-8"
      >
        Travel Assist AR
      </motion.h1>
      
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="text-white/90 text-center px-8 mt-4"
      >
        AR로 여행 정보를 빠르게 이해하세요
      </motion.p>
    </div>
  );
}

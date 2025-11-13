import { 
  User, 
  Settings, 
  MapPin, 
  Camera, 
  Globe, 
  ChevronRight, 
  Bell,
  Shield,
  LogOut,
  Clock,
  Star,
  Bookmark
} from 'lucide-react';
import { RoundedCard } from './ui/RoundedCard';
import { motion } from 'motion/react';
import { useState } from 'react';

interface ProfileScreenProps {
  onLogout: () => void;
}

const travelHistory = [
  {
    city: '파리',
    country: '프랑스',
    date: '2025년 11월',
    placesVisited: 12,
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&q=80'
  },
  {
    city: '로마',
    country: '이탈리아',
    date: '2025년 10월',
    placesVisited: 8,
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400&q=80'
  },
  {
    city: '바르셀로나',
    country: '스페인',
    date: '2025년 9월',
    placesVisited: 15,
    image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=400&q=80'
  },
];

export function ProfileScreen({ onLogout }: ProfileScreenProps) {
  const [locationEnabled, setLocationEnabled] = useState(true);
  const [cameraEnabled, setCameraEnabled] = useState(true);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState('한국어');
  const [showLanguageModal, setShowLanguageModal] = useState(false);

  const languages = ['한국어', 'English', '日本語', '中文', 'Français', 'Español'];

  return (
    <div className="w-full h-full bg-[#FAFAF8] overflow-y-auto pb-28">
      {/* Header with Profile */}
      <div className="bg-gradient-to-br from-[#4A90E2] to-[#357ABD] px-6 pt-12 pb-8 text-white">
        <h1 className="mb-6 text-center">프로필</h1>
        
        {/* Profile Info */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 border-4 border-white/30">
            <User className="w-12 h-12" />
          </div>
          <h2 className="mb-2 text-center">여행자</h2>
          <p className="text-white/80 mb-4 text-center">traveler@example.com</p>
          
          {/* Stats */}
          <div className="flex gap-6">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <MapPin className="w-4 h-4" />
                <span className="text-2xl">35</span>
              </div>
              <p className="text-white/80 text-sm">방문</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Bookmark className="w-4 h-4" />
                <span className="text-2xl">12</span>
              </div>
              <p className="text-white/80 text-sm">저장</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Star className="w-4 h-4" />
                <span className="text-2xl">28</span>
              </div>
              <p className="text-white/80 text-sm">리뷰</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 pt-6 space-y-6">
        {/* Personal Settings */}
        <div>
          <h3 className="mb-4">개인 정보</h3>
          <RoundedCard>
            <div className="space-y-4">
              <button className="w-full flex items-center justify-between py-2">
                <div className="flex items-center gap-3">
                  <User className="w-5 h-5 text-gray-600" />
                  <span>계정 정보</span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
              
              <div className="border-t border-gray-100" />
              
              <button className="w-full flex items-center justify-between py-2">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-gray-600" />
                  <span>개인정보 처리방침</span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </RoundedCard>
        </div>

        {/* Permissions */}
        <div>
          <h3 className="mb-4">권한 설정</h3>
          <RoundedCard>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-gray-600" />
                  <div>
                    <p>위치 기반 서비스</p>
                    <p className="text-gray-500 text-sm">주변 장소 추천 및 AR 기능</p>
                  </div>
                </div>
                <button
                  onClick={() => setLocationEnabled(!locationEnabled)}
                  className={`w-14 h-8 rounded-full transition-colors relative ${
                    locationEnabled ? 'bg-[#4A90E2]' : 'bg-gray-300'
                  }`}
                >
                  <motion.div
                    className="absolute top-1 w-6 h-6 bg-white rounded-full"
                    animate={{ left: locationEnabled ? '28px' : '4px' }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                </button>
              </div>
              
              <div className="border-t border-gray-100" />
              
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-3">
                  <Camera className="w-5 h-5 text-gray-600" />
                  <div>
                    <p>카메라 접근</p>
                    <p className="text-gray-500 text-sm">AR 모드 및 메뉴 스캔</p>
                  </div>
                </div>
                <button
                  onClick={() => setCameraEnabled(!cameraEnabled)}
                  className={`w-14 h-8 rounded-full transition-colors relative ${
                    cameraEnabled ? 'bg-[#4A90E2]' : 'bg-gray-300'
                  }`}
                >
                  <motion.div
                    className="absolute top-1 w-6 h-6 bg-white rounded-full"
                    animate={{ left: cameraEnabled ? '28px' : '4px' }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                </button>
              </div>
              
              <div className="border-t border-gray-100" />
              
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-3">
                  <Bell className="w-5 h-5 text-gray-600" />
                  <div>
                    <p>알림</p>
                    <p className="text-gray-500 text-sm">여행 정보 및 추천 알림</p>
                  </div>
                </div>
                <button
                  onClick={() => setNotificationsEnabled(!notificationsEnabled)}
                  className={`w-14 h-8 rounded-full transition-colors relative ${
                    notificationsEnabled ? 'bg-[#4A90E2]' : 'bg-gray-300'
                  }`}
                >
                  <motion.div
                    className="absolute top-1 w-6 h-6 bg-white rounded-full"
                    animate={{ left: notificationsEnabled ? '28px' : '4px' }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                </button>
              </div>
            </div>
          </RoundedCard>
        </div>

        {/* Language Selection */}
        <div>
          <h3 className="mb-4">언어 설정</h3>
          <RoundedCard>
            <button 
              onClick={() => setShowLanguageModal(true)}
              className="w-full flex items-center justify-between py-2"
            >
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-gray-600" />
                <span>언어</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-600">{selectedLanguage}</span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            </button>
          </RoundedCard>
        </div>

        {/* Travel History */}
        <div>
          <h3 className="mb-4">여행 기록</h3>
          <div className="space-y-3">
            {travelHistory.map((trip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <RoundedCard className="cursor-pointer hover:shadow-lg transition-shadow">
                  <div className="flex gap-4">
                    <div className="w-20 h-20 rounded-2xl bg-gray-200 overflow-hidden flex-shrink-0">
                      <img
                        src={trip.image}
                        alt={trip.city}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="mb-1">{trip.city}</h4>
                          <p className="text-gray-600">{trip.country}</p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{trip.date}</span>
                        <span>·</span>
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{trip.placesVisited}곳 방문</span>
                      </div>
                    </div>
                  </div>
                </RoundedCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Logout */}
        <div className="pb-6">
          <RoundedCard>
            <button
              onClick={onLogout}
              className="w-full flex items-center justify-center gap-3 py-3 text-red-500"
            >
              <LogOut className="w-5 h-5" />
              <span>로그아웃</span>
            </button>
          </RoundedCard>
        </div>
      </div>

      {/* Language Selection Modal */}
      {showLanguageModal && (
        <div className="fixed inset-0 bg-black/50 flex items-end z-50" onClick={() => setShowLanguageModal(false)}>
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            className="w-full bg-white rounded-t-[30px] p-6 pb-12"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-center mb-4">
              <div className="w-12 h-1 bg-gray-300 rounded-full" />
            </div>
            <h3 className="mb-6 text-center">언어 선택</h3>
            <div className="space-y-2">
              {languages.map((lang, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedLanguage(lang);
                    setShowLanguageModal(false);
                  }}
                  className={`w-full h-14 rounded-2xl flex items-center justify-center transition-all ${
                    selectedLanguage === lang
                      ? 'bg-[#4A90E2] text-white'
                      : 'bg-[#F7F4EC] text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

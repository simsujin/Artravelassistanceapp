import { Home, Search, Camera, Bookmark, User } from 'lucide-react';

interface BottomNavigationProps {
  currentScreen: string;
  onNavigate: (screen: string) => void;
  isARMode?: boolean;
}

export function BottomNavigation({ currentScreen, onNavigate, isARMode }: BottomNavigationProps) {
  // If in AR mode, show only Home button
  if (isARMode) {
    return (
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-white/95 backdrop-blur-md border-t border-gray-200 flex items-center justify-center pb-6 z-50">
        <button
          onClick={() => onNavigate('home')}
          className="w-16 h-16 rounded-full bg-[#4A90E2] text-white flex items-center justify-center shadow-lg"
        >
          <Home className="w-8 h-8" />
        </button>
      </div>
    );
  }

  return (
    <div className="absolute bottom-0 left-0 right-0 h-24 bg-white/95 backdrop-blur-md border-t border-gray-200 flex items-center justify-around pb-6 px-8 z-50">
      {/* Home */}
      <button
        onClick={() => onNavigate('home')}
        className={`flex flex-col items-center gap-1 transition-colors ${
          currentScreen === 'home' ? 'text-[#4A90E2]' : 'text-gray-400'
        }`}
      >
        <Home className="w-6 h-6" />
        <span className="text-xs text-center">홈</span>
      </button>

      {/* Search */}
      <button
        onClick={() => onNavigate('explore')}
        className={`flex flex-col items-center gap-1 transition-colors ${
          currentScreen === 'explore' ? 'text-[#4A90E2]' : 'text-gray-400'
        }`}
      >
        <Search className="w-6 h-6" />
        <span className="text-xs text-center">탐색</span>
      </button>

      {/* AR Camera */}
      <button
        onClick={() => onNavigate('ar-view')}
        className="w-16 h-16 rounded-full bg-[#4A90E2] text-white flex items-center justify-center -mt-8 shadow-lg"
      >
        <Camera className="w-8 h-8" />
      </button>

      {/* Saved */}
      <button
        onClick={() => onNavigate('saved')}
        className={`flex flex-col items-center gap-1 transition-colors ${
          currentScreen === 'saved' ? 'text-[#4A90E2]' : 'text-gray-400'
        }`}
      >
        <Bookmark className="w-6 h-6" />
        <span className="text-xs text-center">저장</span>
      </button>

      {/* Profile */}
      <button
        onClick={() => onNavigate('profile')}
        className={`flex flex-col items-center gap-1 transition-colors ${
          currentScreen === 'profile' ? 'text-[#4A90E2]' : 'text-gray-400'
        }`}
      >
        <User className="w-6 h-6" />
        <span className="text-xs text-center">프로필</span>
      </button>
    </div>
  );
}
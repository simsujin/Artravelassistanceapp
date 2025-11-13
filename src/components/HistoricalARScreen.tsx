import { ArrowLeft, Heart, User } from 'lucide-react';
import { useState } from 'react';
import { Slider } from './ui/slider';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion, AnimatePresence } from 'motion/react';

interface HistoricalARScreenProps {
  onBack: () => void;
}

const hashtagData = [
  { tag: '#역사적인', count: 124, users: [
    { name: '김민준', avatar: '👨', country: '🇰🇷' },
    { name: 'Sarah Kim', avatar: '👩', country: '🇺🇸' },
    { name: '佐藤健', avatar: '👨', country: '🇯🇵' },
    { name: 'Marie Laurent', avatar: '👩', country: '🇫🇷' },
    { name: '张伟', avatar: '👨', country: '🇨🇳' },
  ]},
  { tag: '#아름다운', count: 98, users: [
    { name: '이서연', avatar: '👩', country: '🇰🇷' },
    { name: 'John Smith', avatar: '👨', country: '🇬🇧' },
    { name: 'Anna Müller', avatar: '👩', country: '🇩🇪' },
    { name: 'Carlos Garcia', avatar: '👨', country: '🇪🇸' },
  ]},
  { tag: '#감동적인', count: 76, users: [
    { name: '박지호', avatar: '👨', country: '🇰🇷' },
    { name: 'Emma Wilson', avatar: '👩', country: '🇦🇺' },
    { name: 'Lucas Silva', avatar: '👨', country: '🇧🇷' },
  ]},
];

export function HistoricalARScreen({ onBack }: HistoricalARScreenProps) {
  const [opacity, setOpacity] = useState([50]);
  const [likedTags, setLikedTags] = useState<string[]>([]);
  const [selectedHashtag, setSelectedHashtag] = useState<typeof hashtagData[0] | null>(null);

  const toggleLike = (tag: string) => {
    setLikedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

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

      {/* Hashtag Section */}
      <div className="absolute top-32 left-0 right-0 px-6 z-10">
        <div className="bg-black/60 backdrop-blur-md rounded-[22px] p-4">
          <p className="text-white/80 mb-3 text-center">방문자들의 의견</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {hashtagData.map((item, index) => (
              <button
                key={index}
                onClick={() => setSelectedHashtag(item)}
                className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all flex items-center gap-2"
              >
                <span>{item.tag}</span>
                <span className="text-white/70">{item.count}</span>
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 justify-center mt-4">
            {hashtagData.map((item, index) => (
              <button
                key={index}
                onClick={() => toggleLike(item.tag)}
                className={`px-4 py-2 rounded-full border transition-all flex items-center gap-2 ${
                  likedTags.includes(item.tag)
                    ? 'bg-[#EF4444] border-[#EF4444] text-white'
                    : 'bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30'
                }`}
              >
                <Heart className={`w-4 h-4 ${likedTags.includes(item.tag) ? 'fill-white' : ''}`} />
                <span>{item.tag}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Slider Control */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="bg-white/95 backdrop-blur-md rounded-[22px] p-6 shadow-2xl">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-600">과거</span>
            <span className="text-gray-600">현재</span>
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

      {/* Hashtag Users Modal */}
      <AnimatePresence>
        {selectedHashtag && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-end z-50"
            onClick={() => setSelectedHashtag(null)}
          >
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="w-full bg-white rounded-t-[30px] p-6 pb-12 max-h-[60vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-center mb-4">
                <div className="w-12 h-1 bg-gray-300 rounded-full" />
              </div>
              
              <h3 className="mb-2 text-center">{selectedHashtag.tag}</h3>
              <p className="text-gray-600 mb-6 text-center">{selectedHashtag.count}명이 선택했어요</p>

              <div className="space-y-3">
                {selectedHashtag.users.map((user, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-[#F7F4EC] rounded-2xl"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4A90E2] to-[#357ABD] flex items-center justify-center text-2xl">
                      {user.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4>{user.name}</h4>
                        <span>{user.country}</span>
                      </div>
                      <p className="text-gray-600">여행자</p>
                    </div>
                    <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors">
                      <User className="w-5 h-5 text-gray-600" />
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
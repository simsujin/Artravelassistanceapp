import { Camera, MapPin, Compass, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

interface PermissionsScreenProps {
  onComplete: () => void;
}

const permissions = [
  {
    icon: Camera,
    title: '카메라 접근',
    description: 'AR 정보 표시를 위해 필요해요',
  },
  {
    icon: MapPin,
    title: '위치 정보',
    description: '주변 장소 추천을 위해 필요해요',
  },
  {
    icon: Compass,
    title: '방향 감지',
    description: '안전한 AR 사용을 위해 필요해요',
  },
];

export function PermissionsScreen({ onComplete }: PermissionsScreenProps) {
  const [granted, setGranted] = useState<number[]>([]);

  const handleAllow = () => {
    onComplete();
  };

  return (
    <div className="w-full h-full bg-[#FAFAF8] flex flex-col px-8 py-12">
      <h1 className="mb-4">권한 설정</h1>
      <p className="text-gray-600 mb-12">
        원활한 서비스 이용을 위해<br />
        다음 권한을 허용해주세요
      </p>

      <div className="flex-1 space-y-4">
        {permissions.map((permission, index) => {
          const Icon = permission.icon;
          const isGranted = granted.includes(index);
          
          return (
            <div
              key={index}
              onClick={() => {
                if (!isGranted) {
                  setGranted([...granted, index]);
                }
              }}
              className={`bg-white rounded-[22px] p-6 shadow-sm transition-all cursor-pointer ${
                isGranted ? 'ring-2 ring-[#4A90E2]' : ''
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#4A90E2]/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-[#4A90E2]" />
                </div>
                
                <div className="flex-1">
                  <h3>{permission.title}</h3>
                  <p className="text-gray-600 mt-1">{permission.description}</p>
                </div>

                {isGranted && (
                  <CheckCircle2 className="w-6 h-6 text-[#4A90E2] flex-shrink-0" />
                )}
              </div>
            </div>
          );
        })}
      </div>

      <Button
        onClick={handleAllow}
        className="w-full h-14 rounded-full bg-[#4A90E2] hover:bg-[#357ABD] mt-8 text-center"
      >
        Allow & Continue
      </Button>
    </div>
  );
}
import { ArrowLeft, Star, Info } from 'lucide-react';
import { RoundedCard } from './ui/RoundedCard';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface MenuDetailScreenProps {
  onBack: () => void;
}

export function MenuDetailScreen({ onBack }: MenuDetailScreenProps) {
  return (
    <div className="w-full h-full bg-[#FAFAF8] overflow-y-auto">
      {/* Header Image */}
      <div className="relative h-80">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80"
          alt="Caesar Salad"
          className="w-full h-full object-cover"
        />
        
        <button
          onClick={onBack}
          className="absolute top-12 left-6 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* Content */}
      <div className="px-6 py-6">
        <h1 className="mb-2">Caesar Salad</h1>
        <h3 className="text-gray-600 mb-6">시저 샐러드</h3>

        {/* Description */}
        <RoundedCard className="mb-4">
          <p className="text-gray-600">
            로메인 상추에 파마산 치즈, 크루통, 시저 드레싱을 곁들인 클래식한 샐러드입니다.
          </p>
        </RoundedCard>

        {/* Ingredients */}
        <h3 className="mb-3">주요 재료</h3>
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="px-4 py-2 bg-white rounded-full border border-gray-200">
            🥬 로메인 상추
          </span>
          <span className="px-4 py-2 bg-white rounded-full border border-gray-200">
            🧀 파마산 치즈
          </span>
          <span className="px-4 py-2 bg-white rounded-full border border-gray-200">
            🍞 크루통
          </span>
          <span className="px-4 py-2 bg-white rounded-full border border-gray-200">
            🥚 계란
          </span>
        </div>

        {/* Allergy Info */}
        <RoundedCard className="bg-amber-50 border border-amber-200 mb-6">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-amber-900 mb-1">알레르기 정보</h4>
              <p className="text-amber-700">유제품, 글루텐, 계란 함유</p>
            </div>
          </div>
        </RoundedCard>

        {/* Similar Korean Food */}
        <h3 className="mb-3">비슷한 한식</h3>
        <RoundedCard className="bg-blue-50 border border-blue-200 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center">
              <span className="text-3xl">🥗</span>
            </div>
            <div>
              <h4 className="text-blue-900">겉절이</h4>
              <p className="text-blue-700 mt-1">
                신선한 채소에 양념을 버무린 한식
              </p>
            </div>
          </div>
        </RoundedCard>

        {/* Reviews */}
        <div className="flex items-center justify-between mb-6">
          <h3>리뷰</h3>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            <span>4.6</span>
          </div>
        </div>

        <RoundedCard>
          <p className="text-gray-600">
            "신선하고 맛있어요. 드레싱이 진하지 않아서 좋았습니다."
          </p>
          <p className="text-gray-400 mt-2">- 김OO</p>
        </RoundedCard>
      </div>
    </div>
  );
}
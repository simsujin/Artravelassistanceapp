import { LucideIcon } from 'lucide-react';

interface CategoryButtonProps {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
}

export function CategoryButton({ icon: Icon, label, onClick }: CategoryButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center justify-center gap-3 h-32 bg-white rounded-[22px] border border-gray-200 hover:border-[#4A90E2] hover:shadow-md transition-all"
    >
      <div className="w-14 h-14 rounded-full bg-[#4A90E2]/10 flex items-center justify-center">
        <Icon className="w-7 h-7 text-[#4A90E2]" />
      </div>
      <span className="text-gray-700">{label}</span>
    </button>
  );
}

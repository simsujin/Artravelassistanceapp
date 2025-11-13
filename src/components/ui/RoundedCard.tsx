import { ReactNode } from 'react';

interface RoundedCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function RoundedCard({ children, className = '', onClick }: RoundedCardProps) {
  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-[22px] p-6 shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}

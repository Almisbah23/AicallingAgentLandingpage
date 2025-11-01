import React from 'react';

interface EmotionResponseIconProps {
  className?: string;
}

const EmotionResponseIcon: React.FC<EmotionResponseIconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <path d="M12 7.5c-2.5-2.5-6-1-6 2.5C6 12.5 12 16 12 16s6-3.5 6-6c0-3.5-3.5-5-6-2.5z" />
    </svg>
  );
};

export default EmotionResponseIcon;

import React from 'react';

interface ToneIconProps {
  className?: string;
}

const ToneIcon: React.FC<ToneIconProps> = ({ className }) => {
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
      <path d="M3 8v8" />
      <path d="M7 6v12" />
      <path d="M11 4v16" />
      <path d="M15 6v12" />
      <path d="M19 8v8" />
    </svg>
  );
};

export default ToneIcon;

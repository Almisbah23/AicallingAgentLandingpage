import React from 'react';

interface LanguageIconProps {
  className?: string;
}

const LanguageIcon: React.FC<LanguageIconProps> = ({ className }) => {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
      <circle cx="12" cy="12" r="7" />
      <path d="M12 5c-4 0-6 3-6 7s2 7 6 7" />
      <path d="M12 5c4 0 6 3 6 7s-2 7-6 7" />
    </svg>
  );
};

export default LanguageIcon;

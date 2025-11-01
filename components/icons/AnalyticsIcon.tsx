import React from 'react';

interface AnalyticsIconProps {
  className?: string;
}

const AnalyticsIcon: React.FC<AnalyticsIconProps> = ({ className }) => {
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
      <path d="M3 3v18h18" />
      <path d="M7 12v5" />
      <path d="M12 8v9" />
      <path d="M17 4v13" />
    </svg>
  );
};

export default AnalyticsIcon;

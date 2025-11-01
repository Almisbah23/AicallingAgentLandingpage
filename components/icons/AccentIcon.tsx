import React from 'react';

interface AccentIconProps {
  className?: string;
}

const AccentIcon: React.FC<AccentIconProps> = ({ className }) => {
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
      <path d="M10.5 12.5 8 20" />
      <path d="m16 8-1.5 3" />
      <path d="M2 14h6" />
      <path d="m14 14 6 .5" />
      <path d="M6.5 14.5.5 16" />
      <path d="m18.5 14.5 5.5 1.5" />
      <path d="M12 12c-2-2.67-4-4-6-4" />
      <path d="M12 12c2-2.67 4-4 6-4" />
    </svg>
  );
};

export default AccentIcon;

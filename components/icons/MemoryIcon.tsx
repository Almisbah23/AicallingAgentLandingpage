import React from 'react';

interface MemoryIconProps {
  className?: string;
}

const MemoryIcon: React.FC<MemoryIconProps> = ({ className }) => {
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
      <path d="M12 2a4 4 0 0 0-4 4v2H4v6h4V8a4 4 0 1 0 8 0v6h4V8h-4V6a4 4 0 0 0-4-4z" />
      <path d="M4.5 12.5v4a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-4" />
      <path d="M15 13h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1z" />
      <path d="M9 13H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1z" />
    </svg>
  );
};

export default MemoryIcon;

import React from 'react';

const CustomerSupportIcon: React.FC<{ className?: string }> = ({ className }) => (
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
    <path d="M17 18a5 5 0 0 0-10 0" />
    <path d="M12 14v4" />
    <path d="M12 2a5 5 0 0 0-5 5v5a5 5 0 0 0 10 0V7a5 5 0 0 0-5-5z" />
    <path d="M7 12h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2" />
    <path d="M17 12h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2" />
  </svg>
);

export default CustomerSupportIcon;

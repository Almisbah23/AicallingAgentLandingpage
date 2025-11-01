import React from 'react';

const RenewalIcon: React.FC<{ className?: string }> = ({ className }) => (
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
    <path d="M21.5 2v6h-6" />
    <path d="M2.5 22v-6h6" />
    <path d="M2 11.5A10 10 0 0 1 12 2a10 10 0 0 1 7.75 3.75" />
    <path d="M22 12.5a10 10 0 0 1-17.75 6.25" />
  </svg>
);

export default RenewalIcon;

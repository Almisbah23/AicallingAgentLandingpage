import React from 'react';

interface WaveIconProps {
  className?: string;
  style?: React.CSSProperties;
}

const WaveIcon: React.FC<WaveIconProps> = ({ className, style }) => {
  return (
    <svg
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
    >
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        d="M0,160 C120,100 240,100 360,160 S600,220 720,160 960,100 1080,160 1320,220 1440,160 V320 H0 Z"
        transform="translate(0 20)"
        filter="url(#glow)"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeOpacity="0.7"
        d="M0,192 C150,240 300,160 450,192 S750,240 900,192 1200,160 1350,192 1440,240 1440,240"
      />
       <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        d="M0,128 C200,200 400,100 600,128 S1000,200 1200,128 1440,200 1440,200"
        transform="translate(0 40)"
        filter="url(#glow)"
      />
    </svg>
  );
};

export default WaveIcon;
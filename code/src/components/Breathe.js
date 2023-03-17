import React from 'react';

export const Breathe = ({ breathe, setBreathe, step }) => {
  const handleBreatheChange = (event) => {
    setBreathe(event.target.value);
  }
  return (
    <div className="breathe-container">
      <p>Current step: {step} / 7</p>
      <svg width="150" height="150">
        <rect
          x="20"
          y="20"
          width="130"
          height="130"
          fill="none"
          strokeWidth="2"
          strokeDasharray="20 20" />
        <circle cx="10" cy="10" r="5" fill="yellow">
          <animateMotion
            dur="8s"
            repeatCount="indefinite"
            path="M 10,10 L 120,10 L 120,120 L 10,120 Z" />
        </circle>
      </svg>
    </div>
  );
}
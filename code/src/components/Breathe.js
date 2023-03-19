import React from 'react';

export const Breathe = ({ name, activity, colour, place, temp, who }) => {
  return (
    <div className="content-container">
      <svg width="180" height="180">
        <rect
          x="20"
          y="20"
          width="170"
          height="170"
          fill="none"
          strokeDasharray="20 20" />
        <circle cx="10" cy="10" r="8" fill={colour} className="blurryCircle">
          <animateMotion
            dur="8s"
            repeatCount="indefinite"
            path="M 10,10 L 160,10 L 160,160 L 10,160 Z" />
        </circle>
      </svg>
      <h4 className="sumh4">Keep your happy scenario in your mind and let&apos;s slow down...</h4>
      <p>
        Remember, you are by the {place} and you&apos;re going to start {activity} soon. <br />
        It&apos;s around {temp} degrees, {who} is next to you and already looking at
        the {colour} dot. Let&apos;s do this, focus {name}!
      </p>
      <p>
        One breath is illustated by the dot.<br />
        Each step is one side of the square.<br />
        Start by breathing out slowly, releasing the air from your lungs <br /><br />
        1. Breathe in through your nose<br />
        2. Hold your breath  <br />
        3. Exhale slowly <br />
        4. Hold your breath again <br /><br />
        Repeat as many times as you need.
      </p>
    </div>
  );
}
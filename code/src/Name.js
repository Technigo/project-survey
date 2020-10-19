import React from 'react';

export const Name = () => {
  return (
    <div className="name-input" onChange>
      <label className="name-label" for="name">Your full name</label>
      <input id="name" type="text" />
    </div>
  );
};
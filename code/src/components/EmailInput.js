import React from 'react';

export const Email = ({ email }) => {
  return (
    <div>
      <input className="text-input stretch" type="text" placeholder={email} />
    </div>
  )
}
import React from 'react';

export const Summary = ({ self, holiday, destination, sauce, region, flavor, season }) => {
  return (
    <div className="summary-component">
      <p>I consider myself to be <span className="highlight">{self}</span>.</p>
      <p>You will always find me <span className="highlight">{holiday}</span>.</p>
      <p><span className="highlight">{destination === '' ? '' : `Preferably ${destination}.`}</span></p>
      {sauce === '0' && (
        <p><span className="highlight">No sauce for me, thanks.</span></p>
      )}
      {sauce === '1' && (
        <p>I prefer <span className="highlight">hot sauce</span> over mayo any day.</p>
      )}
      {sauce === '2' && (
        <p>I prefer <span className="highlight">mayo</span> over hot sauce any day.</p>
      )}
      {sauce === '3' && (
        <p><span className="highlight">Ew!</span> Neither hot sauce nor mayo, thanks.</p>
      )}
      <p>My closest friends consider me to be <span className="highlight">{region}</span>.</p>
      <p>My finest acquaintances consider me to be <span className="highlight">{flavor}</span>.</p>
      <p>I am my best self in <span className="highlight">{season}</span>.</p>
    </div>
  )
}
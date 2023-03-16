import React from 'react';

export const Effect = ({ effect, setEffect }) => {
  const handleEffectChange = (event) => {
    setEffect(event.target.value);
  }
  return (
    <>
      <p>Have you heard of the Bouba/Kiki effect?</p>
      <input type="text" value={effect} onChange={handleEffectChange} />
    </>
  );
}
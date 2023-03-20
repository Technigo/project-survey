import React from 'react';

export const Kilograms = ({ kilo, setKilo }) => {
  const handleKiloChange = (event) => {
    setKilo(event.target.value);
  };

  return (
    <input className="kilograms" type="number" value={kilo} onChange={handleKiloChange} />
  );
};
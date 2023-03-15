import React from 'react';

export const Impression = ({ setImpression }) => {
  const handleImpression = (event) => {
    setImpression(event.target.value);
  }
  return (
    <div className="selectbox">
      <h3> <span> Thank you! What do you think about the looks of our site? </span></h3>
      <select
        className="dropdown"
        onChange={handleImpression}
        value={Impression}>
        <option value="None">Choose option</option>
        <option value="Bad">Bad!</option>
        <option value="Ordinary">Ordinary...</option>
        <option value="Nice">Nice!</option>
        <option value="Amazing">Amazing!</option>
      </select>
    </div>
  );
}
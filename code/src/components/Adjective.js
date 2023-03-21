/* eslint-disable linebreak-style */
/* eslint-disable max-len */
import React from 'react';

const adjectives = ['happy', 'sad', 'spicy', 'flippin', 'darn', 'cheesy', 'chaotic', 'lazy', 'cruel', 'cringe-y', 'hot'];

export const Adjective = ({ adjective, setAdjective }) => {
  const generatedAdjective = () => {
    const randomIndex = Math.floor(Math.random() * adjectives.length);
    setAdjective(adjectives[randomIndex]);
  }
  return (
    <>
      <input type="text" value={adjective} />
      <button type="button" onClick={generatedAdjective}>
        Generate Adjective
      </button>
    </>

  )
}


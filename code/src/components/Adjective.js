/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
import React from 'react';

const adjectives = ['happy', 'sad', 'spicy', 'flippin', 'darn', 'cheesy', 'chaotic', 'lazy', 'cruel', 'cringe-y', 'hot', 'bold', 'crooked', 'voluptuous', 'beautiful', 'spell-binding', 'magical', 'controversial', 'greedy', 'disgusting'];

export const Adjective = ({ adjective, setAdjective }) => {
  const generatedAdjective = () => {
    const randomIndex = Math.floor(Math.random() * adjectives.length);
    setAdjective(adjectives[randomIndex]);
  }
  return (
    <div className="generator-wrapper">
      <label className="input-label" htmlFor="pick-adjective">Pick a random adjective.</label>
      <input id="pick-adjective" name="pick-adjective" placeholder="click button" type="text" defaultValue={adjective} />
      <button className="generator-btn" type="button" onClick={generatedAdjective}> </button>
    </div>

  )
}


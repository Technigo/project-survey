/* eslint-disable react/button-has-type */
import React from 'react';

export const StoryTime = ({ name, place, animal, horror, food }) => {
  const Choises = () => {
    if (animal === 'duck') {
      animal = 'chose a duck'
    } else {
      animal = 'chose a frog'
    }
    if (horror === 'snakes') {
      horror = 'being pushed into a pit of snakes'
    } else if (horror === 'pinapple') {
      horror = 'pinapple on pizza'
    } else {
      horror = 'falling out of an airplane'
    }
  }

  Choises();

  return (
    <div className="story-time-container">
      <p>{name}</p>
      <p>{place}</p>
      <p>{animal}</p>
      <p>{horror}</p>
      <p>{food}</p>

      <div>
        <button onClick={() => window.location.reload(false)}>
          Play Again to rewrite your story!
        </button>
      </div>
    </div>
  )
}
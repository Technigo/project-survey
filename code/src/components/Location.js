/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import map from '../assets/map.gif'

// a component that shows a text-area input (step 3)
export const Location = ({ location, setLocation }) => {
  return (
    <>
      <img className="map-image" src={map} alt="a map" />
      <label className="question">
        Tell us more! Where are you travelling to? And if you&apos;re not travelling anywhere, then
         what are your current dream-destinations?
        <textarea
          placeholder="E.g. a shopping-trip to Berlin, hiking in Scotland..."
          required
          className="location-input"
          rows="4"
          cols="34"
          onChange={(event) => setLocation(event.target.value)}
          value={location} />
      </label>
    </>
  )
}
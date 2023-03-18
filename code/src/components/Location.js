/* eslint-disable linebreak-style */
import React from 'react';
import map from '../assets/map.gif'

export const Location = ({ location, setLocation }) => {
  return (
    <>
      <img className="map-image" src={map} alt="a map" />
      <h2 className="question">
        Tell us more! Where are you travelling to? And if you&apos;re not travelling anywhere, then
         what are your current dream-destinations?
      </h2>
      <textarea
        className="location-input"
        rows="4"
        cols="34"
        onChange={(event) => setLocation(event.target.value)}
        value={location} />
    </>
  )
}
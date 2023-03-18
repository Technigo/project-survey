/* eslint-disable linebreak-style */
import React from 'react';
import airportMan from '../assets/airport-man.png'

export const Location = ({ location, setLocation }) => {
  return (
    <>
      <img src={airportMan} alt="A man waiting in an airport" />
      <h2 className="question">
        Tell us more! Where are you travelling to? And if you&apos;re not travelling anywhere, then
         what&apos;s current your dream-destination?
      </h2>
      <input
        className="location-input"
        type="text"
        onChange={(event) => setLocation(event.target.value)}
        value={location} />
    </>
  )
}
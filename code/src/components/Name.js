/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import travelGear from '../assets/travel-gear.gif'

// a component that shows a text input (step 1).
export const Name = ({ name, setName }) => {
  return (
    <>
      <img src={travelGear} alt="a backpack, a map and a camera" />
      <p className="intro">We&apos;d love to ask you a few questions about travel. But first...</p>
      <label className="question">What is your name?
        <input
          name="username"
          className="name-input"
          type="text"
          onChange={(event) => setName(event.target.value)}
          value={name}
          placeholder="Your name" />
      </label>
    </>
  )
}
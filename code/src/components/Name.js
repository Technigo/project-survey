/* eslint-disable linebreak-style */
import React from 'react';
import travelGear from '../assets/travel-gear.gif'

export const Name = ({ name, setName }) => {
  return (
    <>
      <img src={travelGear} alt="a backpack, a map and a camera" />
      <p className="intro">We&apos;d love to ask you a few questions about travel. But first...</p>
      <h2 className="question">What is your name?</h2>
      <input
        className="name-input"
        type="text"
        onChange={(event) => setName(event.target.value)}
        value={name} />
    </>
  )
}
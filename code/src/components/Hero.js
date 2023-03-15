import React from 'react';

export const Hero = ({ hero, setHero }) => {
  const handleHeroChange = (event) => {
    setHero(event.target.value)
  }

  return (
    <>
      <p className="question">Let us dream even further and have more powers. What would you choose?  </p>
      <select className="hero-selection" onChange={handleHeroChange} value={hero}>
        <option disabled value="">Select your power here: </option>
        <option value="fly" aria-label="A Hero that flys" checked={hero === 'Flying hero'} onChange={handleHeroChange}>Hero that Flys </option>
        <option value="create fire" aria-label="A Hero that creates fire" checked={hero === 'Fire hero'} onChange={handleHeroChange}>Hero with Fire </option>
        <option value="travel in time" aria-label="A Hero that travels in time" checked={hero === 'Timetravel hero'} onChange={handleHeroChange}>Hero that timetravels </option>
        <option value="be transparent" aria-label="A Hero that you can dissapear" checked={hero === 'Transparent hero'} onChange={handleHeroChange}>Hero that blends in </option>
      </select>
    </>
  );
}
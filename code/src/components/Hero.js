import React from 'react';

export const Hero = ({ hero, setHero }) => {
  const handleHeroChange = (event) => {
    setHero(event.target.value)
  }

  return (
    <>
      <p className="question">If you had to choose, which SuperHero would you be?</p>
      <select className="hero-selection" onChange={handleHeroChange} value={hero}>
        <option disabled value="">Select your HERO here </option>
        <option value="Flying Hero" aria-label="A Hero that can fly" checked={hero === 'Flying hero'} onChange={handleHeroChange}>Hero that Flys </option>
        <option value="Fire Hero" aria-label="A Hero that creates fire" checked={hero === 'Fire hero'} onChange={handleHeroChange}>Hero with Fire </option>
        <option value="Timetravel Hero" aria-label="A Hero that travels in time" checked={hero === 'Timetravel hero'} onChange={handleHeroChange}>Hero that timetravels </option>
      </select>
    </>
  );
}
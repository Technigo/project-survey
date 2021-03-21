import React from 'react';

export const EnergyLevelSlider = ( {energy, setEnergy}) => {
  const onEnergyChange = (e) => {
    setEnergy(e.target.value)
  }

  return (
      <div className='question-wrapper'>
        <h3>On a scale 1(low) to 5(high), what is your energy level at the moment?</h3>
        <input 
          id={energy}
          type='range'
          className='slider'
          min='1'
          max='5'
          value={energy}
          onChange={onEnergyChange}
        />
        <label htmlFor={energy}>{energy}</label>
      </div>
  )
}
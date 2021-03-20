import React from 'react';

export const EnergyLevelRadioOption = ( {energy, setEnergy}) => {
  const onEnergyChange = (e) => {
    setEnergy(e.target.value)
  }

  return (
    <div>
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
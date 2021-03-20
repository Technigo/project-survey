import React from 'react';

export const EnergyLevelRadioOption = ( {energy, setEnergy}) => {
  const onEnergyChange = (e) => {
    setEnergy(e.target.value)
  }

  return (
    <div>
      <input 
        id={energy}
        type='radio'
        name='energy'
        value={energy}
        onChange={onEnergyChange}
        required
      />
      <label htmlFor={energy}>{energy}</label>
    </div>
  )
}
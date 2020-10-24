import React from 'react';

const CheckboxGroup = ({ energy, onEnergyChange }) => {


  return (
    <div className="question-card">
      <h3 className="question-header">How often du you push yourself outside of your comfort zone?</h3>
      <label htmlFor="never">Never</label>
      <input
        id="never"
        type="checkbox"
        checked={energy.includes('never')}
        onChange={() => onEnergyChange('never')}
      />
      <label htmlFor="sometimes">Sometimes</label>
      <input
        id="sometimes"
        type="checkbox"
        checked={energy.includes('sometimes')}
        onChange={() => onEnergyChange('sometimes')}
      />
      <label htmlFor="often">Often</label>
      <input
        id="often"
        type="checkbox"
        checked={energy.includes('often')}
        onChange={() => onEnergyChange('often')}
      />
      <label htmlFor="yihaa">Yihaa!</label>
      <input
        id="yihaa"
        type="checkbox"
        checked={energy.includes('yihaa')}
        onChange={() => onEnergyChange('yihaa')}
      />
    </div>
  );

};

export default CheckboxGroup;


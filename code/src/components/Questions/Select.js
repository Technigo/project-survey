import React from 'react';


const SelectMotto = ({ motto, onMottoChange }) => {

  return (
    <div className="question-card">
      <h3 className="question-header"> What fits you best?</h3>
      <select
        value={motto}
        onChange={e => onMottoChange(e.target.value)} >
        <option value="motto-option">Choose your fit...</option>
        <option value="motto-option">Never Give Up</option>
        <option value="motto-option">Keep grinding</option>
        <option value="motto-option">Make it work</option>
        <option value="motto-option">Bring it on</option>
      </select>
    </div>

  );
};

export default SelectMotto
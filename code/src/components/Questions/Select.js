import React from 'react';


const SelectMotto = ({ motto, onMottoChange }) => {

  return (
    <div className="question-card">
      <h3 className="question-header" tabIndex="0"> What fits you best?</h3>
      <select aria-label="motto" tabIndex="0"
        value={motto}
        onChange={e => onMottoChange(e.target.value)} >
        <option value="motto-option" name="motto" >Choose your fit...</option>
        <option value="never give up" name="motto" >Never Give Up</option>
        <option value="keep grinding" name="motto" >Keep grinding</option>
        <option value="make ir work" name="motto">Make it work</option>
        <option value="bring it on" name="motto">Bring it on</option>
      </select>
    </div>

  );
};

export default SelectMotto;
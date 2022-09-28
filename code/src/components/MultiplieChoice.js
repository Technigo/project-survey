
import React from 'react';

export const MultiplieChoice = ({NextQuestion, backCounter, onSpell, Spell}) => {
 

  return (
    <div className="MultChoice">
      <label> Whats your favorite spell?</label>
      <select id="spells" 
      name="Spells"
      value={Spell}
      onChange={onSpell}
      className="dropdown"
      >
        <option value="1"> spell 1</option>
        <option value="2"> spell 2</option>
        <option value="3"> spell 3</option>
        <option value="4"> spell 4</option>
      </select>
      <button type="button" onClick={NextQuestion} className="button"> Next Question </button>
      <button type="button" onClick={backCounter} className="button"> Back</button>
    </div>
  )
} 
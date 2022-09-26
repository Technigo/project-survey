
import React, { useState } from 'react';

export const MultiplieChoice = ({nextPage, backCounter}) => {
  const [Spell, SetSpell] = useState('')

  return (
    <div className="MultChoice">
      <label> Whats your favorite spell?</label>
      <select id="spells" name="Spells"
      onChange={event => SetSpell(event.target.value)}
      value={Spell}>
        <option value="1"> spell 1</option>
        <option value="2"> spell 2</option>
        <option value="3"> spell 3</option>
        <option value="4"> spell 4</option>
      </select>
      <button type="button" onClick={nextPage}> Back </button>
      <button type="button" onClick={backCounter}> Next Question</button>
    </div>
  )
} 
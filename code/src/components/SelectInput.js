import React from 'react';

export const SelectInput = ({personality, setPersonality}) => {

  return (
    <div className="form-question-container">
      <h2 tabIndex="0">Pick one word that describes you the best</h2> 
      <label htmlFor={personality}>Select a personality feature</label>
        <select
        onChange = {(event) => setPersonality(event.target.value)}
        value = {personality}
        id = {personality}
        required
        >
        <option value = " ">Select answer</option>
        <option value = "lazy">Lazy</option>
        <option value = "curious">Curious</option>
        <option value = "sarcastic">Sarcastic</option>
        </select>
    </div>
     
    )
}

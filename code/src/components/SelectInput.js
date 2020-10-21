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
        <option value = "lazy">lazy</option>
        <option value = "curious">curious</option>
        <option value = "kind">kind</option>
        <option value = "nervous">nervous</option>
        <option value = "enthusiastic">enthusiastic</option>
        <option value = "funny">funny</option>
        <option value = "spontaneus">spontaneus</option>
        <option value = "shy">shy</option>
        </select>
    </div>
     
    )
}

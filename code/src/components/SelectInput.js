import React from 'react'

export const SelectInput = ({personality, onPersonalityChange}) => {
  
  return (
    <div className="form-question-container">
      <h2 tabIndex="0">Pick one word that describes you!</h2> 
      <label tabIndex="0" htmlFor={personality}>Select a personality feature:</label>
        <select
          onChange = {onPersonalityChange}
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

import React from 'react';

export const SelectInput = ({personality, setPersonality}) => {

  return (
    <section className="survey-question-container">
      <h2 tabIndex="0">Pick one word that describes you the best</h2> 
      <label htmlFor={personality}>Select a personality feature</label>
        <select
        onChange = {(event) => setPersonality(event.target.value)}
        value = {personality}
        id = {personality}
        required
        >
        <option value = " ">Crazy</option>
        <option value = "lazy">Lazy</option>
        <option value = "curious">Curious</option>
        <option value = "sarcastic">Sarcastic</option>
        </select>
    </section>
     
    )
}

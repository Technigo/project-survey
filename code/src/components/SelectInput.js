import React from 'react';

export const SelectInput = ({personality, setPersonality}) => {

    return (
        <>
        <h2>Pick one word that describes you the best</h2> 
        <select
        onChange = {(event) => setPersonality(event.target.value)}
        value = {personality}
        required
        >
         <option value = " ">personality feature</option>
         <option value = "lazy">Lazy</option>
         <option value = "curious">Curious</option>
         <option value = "sarcastic">Sarcastic</option>
      </select>
        </>
     
    )
}

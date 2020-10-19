import React from 'react';

export const SelectInput = ({personality, setPersonality}) => {

    return (
        
        <select
        onChange = {(event) => setPersonality(event.target.value)}
        value = {personality}
        
        >
         <option value = " ">personality feature</option>
         <option value = "lazy">Lazy</option>
         <option value = "curious">Curious</option>
         <option value = "sarcastic">Sarcastic</option>
      </select>

     
    )
}

import React from 'react'

//Checkboxes for hobbies
//
const InputCheckboxHobbies = ({question, userHobbies, onHobbiesChange}) => {

  return (
    <>
      <h3>{question}</h3> 
      <label htmlFor="hobbieCoding">Coding</label>
      <input 
        id="hobbieCoding" 
        type="checkbox"
        // checked={userHobbies.includes('coding')} //If I comment-out this it doesn't work
        onChange={() => onHobbiesChange('coding')}
      /> 
      <label htmlFor="hobbieSports">Sports</label>
      <input 
        id="hobbieSports" 
        type="checkbox" 
        // checked={userHobbies.includes('sports')}
        onChange={() => onHobbiesChange('sports')}
      />
      <label htmlFor="hobbieMusic">Music</label>
      <input 
        id="hobbieMusic" 
        type="checkbox"
        checked={userHobbies.includes('music')}
        onChange={() => onHobbiesChange('music')}
      />
      <label htmlFor="hobbieReading">Reading</label>
      <input 
        id="hobbieReading" 
        type="checkbox"
        checked={userHobbies.includes('reading')}
        onChange={() => onHobbiesChange('reading')}
      />
      <label htmlFor="hobbieGardening">Gardening</label>
      <input 
        id="hobbieGardening" 
        type="checkbox"
        checked={userHobbies.includes('gardening')}
        onChange={() => onHobbiesChange('gardening')}
      />
      <label htmlFor="hobbieGaming">Gaming</label>
      <input 
        id="hobbieGaming" 
        type="checkbox"
        checked={userHobbies.includes('gaming')}
        onChange={() => onHobbiesChange('gaming')}
      />
    </>
  );
};
export default InputCheckboxHobbies;
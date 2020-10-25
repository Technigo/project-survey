import React from 'react'

//Checkboxes for hobbies
//
const InputCheckboxHobbies = ({ question, userHobbies, onHobbiesChange }) => {

  return (
    <>
      <h3>{question}</h3>
      <div className="checkbox-container"> 
        <span> 
          <label htmlFor="hobbieCoding">Coding</label>
            <input
              id="hobbieCoding"
              type="checkbox"
              checked={userHobbies.includes('coding')}
              onChange={() => onHobbiesChange('coding')}
            />
        </span>
        <span> 
          <label htmlFor="hobbieSports">Sports</label>
            <input
              id="hobbieSports"
              type="checkbox"
              checked={userHobbies.includes('sports')}
              onChange={() => onHobbiesChange('sports')}
            />
        </span>
        <span> 
          <label htmlFor="hobbieMusic">Music</label>
            <input
              id="hobbieMusic"
              type="checkbox"
              checked={userHobbies.includes('music')}
              onChange={() => onHobbiesChange('music')}
            />
        </span>
        <span> 
          <label htmlFor="hobbieReading">Reading</label>
            <input
              id="hobbieReading"
              type="checkbox"
              checked={userHobbies.includes('reading')}
              onChange={() => onHobbiesChange('reading')}
            />
        </span>
        <span> 
          <label htmlFor="hobbieGardening">Gardening</label>
            <input
              id="hobbieGardening"
              type="checkbox"
              checked={userHobbies.includes('gardening')}
              onChange={() => onHobbiesChange('gardening')}
            />
        </span>
        <span> 
          <label htmlFor="hobbieGaming">Gaming</label>
            <input
              id="hobbieGaming"
              type="checkbox"
              checked={userHobbies.includes('gaming')}
              onChange={() => onHobbiesChange('gaming')}
            />
        </span>
        </div>
    </>
  );
};
export default InputCheckboxHobbies;
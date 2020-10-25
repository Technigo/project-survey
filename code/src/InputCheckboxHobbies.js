import React from 'react'

//Checkboxes for hobbies
//
const InputCheckboxHobbies = ({ question, userHobbies, onHobbiesChange }) => {

  return (
    <>
      <h3 tabIndex="0">{question}</h3>
      <div className="checkbox-container"> 
        <span> 
          <label 
            htmlFor="hobbieCoding" 
            tabIndex="0">
            Coding
            <input
              id="hobbieCoding"
              type="checkbox"
              checked={userHobbies.includes('coding')}
              onChange={() => onHobbiesChange('coding')}
            />
          </label>
        </span>
        <span> 
          <label 
            htmlFor="hobbieSports" 
            tabIndex="0">
            Sports
            <input
              id="hobbieSports"
              type="checkbox"
              checked={userHobbies.includes('sports')}
              onChange={() => onHobbiesChange('sports')}
            />
          </label>
        </span>
        <span> 
          <label 
            htmlFor="hobbieMusic" 
            tabIndex="0">
            Music
            <input
              id="hobbieMusic"
              type="checkbox"
              checked={userHobbies.includes('music')}
              onChange={() => onHobbiesChange('music')}
            />
          </label>
        </span>
        <span> 
          <label 
            htmlFor="hobbieReading" 
            tabIndex="0">
            Reading
            <input
              id="hobbieReading"
              type="checkbox"
              checked={userHobbies.includes('reading')}
              onChange={() => onHobbiesChange('reading')}
            />
          </label>
        </span>
        <span> 
          <label 
            htmlFor="hobbieGardening" 
            tabIndex="0">
            Gardening
            <input
              id="hobbieGardening"
              type="checkbox"
              checked={userHobbies.includes('gardening')}
              onChange={() => onHobbiesChange('gardening')}
            />
          </label>
        </span>
        <span> 
          <label 
            htmlFor="hobbieGaming" 
            tabIndex="0">
            Gaming
            <input
              id="hobbieGaming"
              type="checkbox"
              checked={userHobbies.includes('gaming')}
              onChange={() => onHobbiesChange('gaming')}
            />
          </label>
        </span>
        </div>
    </>
  );
};
export default InputCheckboxHobbies;
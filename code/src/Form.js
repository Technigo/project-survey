import React, { useState } from 'react';

const Form = () => {
  const [yearOfBirth, setYearOfBirth] = useState('');
  const [gender, setGender] = useState('');

  
  const onYearOfBirthChange = event => {
      setYearOfBirth(event.target.value)
  }

};

return (
  <form>
    <div>
      <label htmlFor="yearOfBirth">Ditt födelseår</label>
      <input
        value={yearOfBirth} 
        onChange={onYearOfBirthChange}
        id='yearOfBirth'
        type="number"
        min="1900"
        max="2020"
      >
      </input>
    </div>
    <div className="gender-radio-buttons">
      <label htmlFor="genderFemale">
        <input 
          type="radio"
          name="chooseGender"
          value="female" 
          checked={true}
          className="radio-button-input"
        />
        Kvinna
      </label>
    </div>
    <div className="gender-radio-buttons">
      <label htmlFor="genderMale">
        <input 
          type="radio"
          name="chooseGender"
          value="male" 
          checked={true}
          className="radio-button-input"
        />
        Man
      </label>
    </div>
    <div className="gender-radio-buttons">
      <label htmlFor="genderOther">
        <input 
          type="radio"
          name="chooseGender"
          value="other" 
          checked={true}
          className="radio-button-input"
        />
        Annat
      </label>
    </div>
  </form>
)
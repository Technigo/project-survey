import React, { useState } from 'react';

const Form = () => {
  const [yearOfBirth, setYearOfBirth] = useState('');
  const [gender, setGender] = useState('');

  
  const onYearOfBirthChange = event => {
      setYearOfBirth(event.target.value)
  }

  const onGenderChange = (genderValue) => {
      gender.includes(genderValue)
        setGender( [...gender, genderValue]);
  }

  console.log(gender);

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
        name="gender"
        value="female" 
        checked={gender.includes('female')}
        onChange={() => onGenderChange('female')}
        className="radio-button"
      />
      Kvinna</label>
    </div>
    <div className="gender-radio-buttons">
      <label htmlFor="genderMale">Man</label>
        <input 
          type="radio"
          name="setGender"
          value="male" 
          checked={gender.includes('male')}
          onChange={() => onGenderChange('male')}
          className="radio-button"
        />
    </div>
    <div className="gender-radio-buttons">
      <label htmlFor="genderOther">
        <input 
          type="radio"
          name="setGender"
          value="other" 
          checked={gender.includes('other')}
          onChange={() => onGenderChange('other')}
          className="radio-button"
        />
        Annat
      </label>
    </div>
  </form>
)
};
export default Form;
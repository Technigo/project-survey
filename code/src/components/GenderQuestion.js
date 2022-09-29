import React from 'react';

const GenderQuestion = ({ gender, setGender }) => {
  const handleGenderButtonChange = (event) => {
    setGender(event.target.value);
  }

  return (
    <div className="question-div genderQ">
      <form>
        <h3>Gender</h3>
        <span> Male
          <input type="radio" id="Male" checked={gender === 'Male'} value="Male" onClick={(e) => handleGenderButtonChange(e)} />
        </span>
        <span>Female
          <input type="radio" id="Female" checked={gender === 'Female'} value="Female" onClick={(e) => handleGenderButtonChange(e)} />
        </span>
        <span>Other
          <input type="radio" id="Other" checked={gender === 'Other'} value="Other" onClick={(e) => handleGenderButtonChange(e)} />
        </span>
        <p>You are {gender}</p>
      </form>
    </div>
  );
}

export default GenderQuestion
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'

// This is the firstquestion thats comes up

const ageGroups = [
  '15-25',
  '26-35',
  '36-45',
  '46-60',
  '60+'
];

const AboutCustomer = ({ setAgeGroup }) => {
  const handleAgeGroupChange = (event) => {
    setAgeGroup(event.target.value);
  }
  return (
    <form className="formContainer">
      <h1>How old are u?</h1>
      {ageGroups.map(
        (
          ageGroup // iterating through each venue available
        ) => {
          return (
            <div key={ageGroup} className="priceInterval-choice">
              <input
                value={ageGroup}
                onChange={handleAgeGroupChange}
                type="radio"
                id={ageGroup}
                name="ageChoice-radio" /> {/* This makes it possible to only choose one option */}
              <option>{ageGroup}</option>
            </div>);
        }

      )}
    </form>
  )
}

export default AboutCustomer
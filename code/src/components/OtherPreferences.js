/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

// This is the firstquestion thats comes up
const preferences = [
  'I would like to be able to choose my own yarn and color',
  'I would like to see the item in a store before ordering',
  'It’s more important for me to be able to wash the item easily than the quality of the yarn',
  'I care more about the quailty of the yarn than how easy it is to wash'
];

const OtherPreferences = ({ setPreference, preferenceChoice }) => {
  const handlePreferenceChange = (event) => {
    setPreference(event.target.value);
  }
  return (
    <div className="question-div productQ">
      <form className="formContainer">
        <h1>Do you have any other preferences?</h1>
        {preferences.map(
          (
            preference // iterating through each product available
          ) => {
            return (
              <div key={preference} className="productType-choice">
                <input
                  value={preference}
                  onChange={handlePreferenceChange}
                  type="checkbox"
                  id={preference} />
                <label htmlFor={preference}>{preference}</label>
              </div>);
          }
        )}
      </form>
      <div>
        <p>Your answer: {preferenceChoice}</p>
      </div>
    </div>
  )
}
export default OtherPreferences
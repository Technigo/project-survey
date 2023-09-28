/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import covidWoman from '../assets/covid.png'

const radioValues = [
  'a lot',
  'a little',
  'in no way'
]

// a component that shows radio buttons (step 4)
export const Covid = ({ covid, setCovid }) => {
  return (
    <>
      <img src={covidWoman} alt="A masked woman, spraying disenfectant at covid bacteria" />
      <label className="question">
        How much would you say Covid-19 has changed your travel habits?
        <div className="options-container">
          {radioValues.map((group) => (
          // eslint-disable-next-line jsx-a11y/label-has-associated-control
            <label className="option" key={group}>
              <input
                className="covid-input"
                type="radio"
                value={group}
                required
                onChange={(event) => setCovid(event.target.value)}
                checked={covid === group} />
              {group}
            </label>
          ))}
        </div>
      </label>
    </>
  )
}
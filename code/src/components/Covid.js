/* eslint-disable linebreak-style */
import React from 'react';
import covidWoman from '../assets/covid.png'

const radioValues = [
  'A lot',
  'To some extend',
  'Only a little',
  'Not at all'
]

export const Covid = ({ covid, setCovid }) => {
  return (
    <>
      <img src={covidWoman} alt="A masked woman, spraying disenfectant at covid bacteria" />
      <h2 className="question">
        How much would you say Covid19 has changed your travel habits?
      </h2>
      {radioValues.map((group) => (
        // eslint-disable-next-line jsx-a11y/label-has-associated-control
        <label key={group}>
          <input
            className="covid-input"
            type="radio"
            value={group}
            onChange={(event) => setCovid(event.target.value)}
            checked={covid === group} />
          {group}
        </label>
      ))}
    </>
  )
}
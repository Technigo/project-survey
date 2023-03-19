import React from 'react';
import './frequently.css'

export const Frequently = ({ frequently, setFrequently }) => {
  const handleFrequentlychange = (event) => {
    setFrequently(event.target.value)
  }

  return (
    <>
      <h1 className="survey-title">Sneaker Survey</h1>
      <h2>Please give us some insight in your shopping habits:</h2>
      <form>
        <select
          aria-label="dropdown how often do you buy sneakers"
          className="how-often"
          onChange={handleFrequentlychange}
          value={frequently}>
          <option value="" disabled>You buy sneakers:</option>
          <option value="Once per year">Once per year</option>
          <option value="6 times per year">6 times per year</option>
          <option value="Once every month">Once every month</option>
          <option value="Once every week">New ones every week</option>
        </select>
      </form>
    </>
  )
}
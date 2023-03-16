import React from 'react';

export const Frequently = ({ frequently, setFrequently }) => {
  const handleFrequentlychange = (event) => {
    setFrequently(event.target.value)
  }

  return (
    <>
      <h1>Please give us some insight in your shopping habits:</h1>
      <form>
        <select
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
import React from "react";
import 'Components/FormStyle.css'

export const LocationQuestion = props => {
  const { location, setLocation } = props;

  return (
    <section className='question-container'>
      <label>
      <p>Where would you like to help out?</p>
      <select 
        onChange={event => setLocation(event.target.value)}
        value={location}
      >
        <option value= ''>Select location</option>
        <option value= 'mjolby'>Mjölbv</option>
        <option value= 'hogby'>Högby</option>
        <option value= 'skanninge'>Skänninge</option>
      </select>
    </label>
  </section>
  )
}
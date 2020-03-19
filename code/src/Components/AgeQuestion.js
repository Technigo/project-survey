import React from "react";
import 'Components/FormStyle.css'

export const AgeQuestion = props => {
  const { ageGroup, setAgeGroup } = props;

  return (
    <section className='question-container'>
    <p>How old are you?</p>
    <label>
    <input
      type="radio"
      value="0-18"
      onChange={event => setAgeGroup(event.target.value)}
      checked={ageGroup === "0-18"}
    />
    0-18
  </label>
      <label>
      <input
        type="radio"
        value="19-45"
        onChange={event => setAgeGroup(event.target.value)}
        checked={ageGroup === "19-45"}
      />
      19-45
    </label>
    <label>
      <input
        type="radio"
        value="46-65"
        onChange={event => setAgeGroup(event.target.value)}
        checked={ageGroup === "46-65"}
      />
        46-65
    </label>
  </section>
  )
}
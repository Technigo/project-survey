/* TODO Write code for Dropdrown */

import React from "react";

const DropdownInput = ({ setAnswers, answers, alternatives, index }) => {
  console.log(alternatives)
  return (
    <select
      onChange={event => {
        let tempAnswers = answers
        tempAnswers[index] = event.target.value
        setAnswers(tempAnswers)
      }}
    >
      { alternatives.map(alt => (
        <option value={alt} key={alt}>{alt}</option>
      ))}
    </select>
  )
}

export default DropdownInput

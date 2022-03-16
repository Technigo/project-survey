import React from "react";

export const QuestionTwo = ({ location, onLocationInputChange }) => {

  return (
    <form onSubmit={event => event.preventDefault()}>
      <select
        onChange={onLocationInputChange}
        value={location}
      >
        <option value="">Where in the world are you?</option>
        <option value="stockholm">Stockholm</option>
        <option value="tokyo">Tokyo</option>
        <option value="space">Space</option>
      </select>
    </form>
  )
}
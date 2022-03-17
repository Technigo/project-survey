import React from "react";

export const QuestionTwo = ({ location, onLocationInputChange }) => {

  return (
    <form onSubmit={event => event.preventDefault()}>
      <select
        onChange={onLocationInputChange}
        value={location}
      >
        <option value="">Which of our offices is closest to you?</option>
        <option value="Stockholm">Stockholm</option>
        <option value="Malmö">Malmö</option>
        <option value="Göteborg">Göteborg</option>
      </select>
    </form>
  )
}
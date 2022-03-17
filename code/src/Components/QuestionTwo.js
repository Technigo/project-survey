import React from "react";

export const QuestionTwo = ({ location, onLocationInputChange }) => {

  return (
    <form onSubmit={event => event.preventDefault()}>
      <select
        onChange={onLocationInputChange}
        value={location}
      >
        <option value="">What is your occuapation?</option>
        <option value="Student">Student</option>
        <option value="Artist">Artist</option>
        <option value="Curator">Curator</option>
        <option value="Other">Other</option>
      </select>
    </form>
  )
}
import React, { useState } from "react";

export const QuestionTwo = () => {
  const [location, SetLocation] = useState("");

  return (
    <form onSubmit={event => event.preventDefault()}>
      <select
        onChange={event => SetLocation(event.target.value)}
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
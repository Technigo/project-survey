import React from 'react';

export const FifthQuestion = ({ celebrity, setCelebrity }) => {
  const handleFifthAnswer = (event) => {
    setCelebrity(event.target.value);
  }
  return (
    <form>
      <p className="instructionText"> Pick a celebrity </p>
      <select onChange={handleFifthAnswer} value={celebrity}>
        <option value="">Pick a celebrity </option>
        <option value="Michael Jackson">Michael Jackson</option>
        <option value="Mahatma Gandhi">Mahatma Gandhi</option>
        <option value="Princess Diana">Princess Diana</option>
        <option value="Steve Jobs">Steve Jobs</option>
        <option value="Charles Manson">Charles Manson</option>
        <option value="Christina Aguilera">Christina Aguilera</option>

      </select>
    </form>
  )
}
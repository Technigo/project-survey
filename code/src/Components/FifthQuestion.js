import React from 'react';

export const FifthQuestion = ({ celebrity, setCelebrity }) => {
  const handleFifthAnswer = (event) => {
    setCelebrity(event.target.value);
  }
  return (
    <form>
      <p className="instructionText"> Pick a celebrity! </p>
      <select className="drop-down" onChange={handleFifthAnswer} value={celebrity}>
        <option value="" disabled>Pick a celebrity </option>
        <option value="Michael Jackson">Michael Jackson</option>
        <option value="Mahatma Gandhi">Mahatma Gandhi</option>
        <option value="Princess Diana">Princess Diana</option>
        <option value="Steve Jobs">Steve Jobs</option>
        <option value="Charles Manson">Charles Manson</option>
        <option value="Christina Aguilera">Christina Aguilera</option>
        <option value="the pope">The pope</option>
        <option value="Barack Obama">Barack Obama</option>
        <option value="Madonna">Madonna</option>
        <option value="Dwayne Johnson">Dwayne Johnson</option>
        <option value="Chuck Norris">Chuck Norris</option>
        <option value="Zlatan">Zlatan</option>

      </select>
    </form>
  )
}
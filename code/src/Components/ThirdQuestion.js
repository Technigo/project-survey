import React from 'react';

export const ThirdQuestion = ({ ingVerb, setIngVerb }) => {
  const handleThirdAnswer = (event) => {
    setIngVerb(event.target.value);
  }
  return (
    <form>
      <p className="instructionText"> Pick a verb! </p>
      <select aria-label="dropdown menu" className="drop-down" onChange={handleThirdAnswer} value={ingVerb}>
        <option value="" disabled>Choose verb </option>
        <option value="coding">Coding</option>
        <option value="dancing">Dancing</option>
        <option value="postponing stuff">Postponing stuff</option>
        <option value="stressing out">Stressing out</option>
        <option value="painting">Painting</option>
        <option value="singing">Singing</option>
        <option value="scratching">Scratching</option>
        <option value="sneezing">Sneezing</option>
        <option value="bragging">Bragging</option>
        <option value="complaining">Complaining</option>
        <option value="horseback riding">Horseback riding</option>
      </select>
    </form>
  )
}
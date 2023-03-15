import React from 'react';

export const ThirdQuestion = ({ ingVerb, setIngVerb }) => {
  const handleThirdAnswer = (event) => {
    setIngVerb(event.target.value);
  }
  return (
    <form>
      <p className="instructionText"> Pick a verb! </p>
      <select onChange={handleThirdAnswer} value={ingVerb}>
        <option value="">Choose verb </option>
        <option value="coding">Coding</option>
        <option value="dancing">Dancing</option>
        <option value="postponing stuff">Postponing stuff</option>
        <option value="stressing out">Stressing out</option>
        <option value="painting">Painting</option>
        <option value="singing">Singing</option>

      </select>
    </form>
  )
}
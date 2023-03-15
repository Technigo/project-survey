import React from 'react';

export const ThirdQuestion = ({ ingVerb, setIngVerb }) => {
  const handleThirdAnswer = (event) => {
    setIngVerb(event.target.value);
  }
  return (
    <form>
      <select onChange={handleThirdAnswer} value={ingVerb}>
        <option value="">Choose verb </option>
        <option value="Coding">Coding</option>
        <option value="Dancing">Dancing</option>
        <option value="Postponing stuff">Postponing stuff</option>
        <option value="Stressing out">Stressing out</option>
        <option value="Painting">Painting</option>
        <option value="Singing">Singing</option>

      </select>
    </form>
  )
}
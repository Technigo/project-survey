import React from 'react';
import './components.css';

export const DropDown = ({ answer, setAnswer }) => {
  return (
    <>
      <h2>Are you more of a cat person or a dog person?</h2>
      <form>
        <select
          id="animals"
          onChange={(event) => setAnswer(event.target.value)}
          value={answer}>
          <option value="" disabled>Select option </option>
          <option value="cat">Cat</option>
          <option value="dog">Dog</option>
          <option value="neither">Neither</option>
        </select>
      </form>
    </>
  );
}
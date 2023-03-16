import React from 'react';
import './components.css';

export const FamousPerson = ({ famousPerson, setFamousPerson }) => {
  return (
    <>
      <p className="question">Add question</p>
      <form>
        <select
          className="select-menu"
          id="animals"
          onChange={(event) => setFamousPerson(event.target.value)}
          value={famousPerson}>
          <option value="" disabled>Select option </option>
          <option value="tom-cruise">Tom Cruise</option>
          <option value="dog">Dog</option>
          <option value="neither">Neither</option>
        </select>
      </form>
    </>
  );
}
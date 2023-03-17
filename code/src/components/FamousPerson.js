import React from 'react';
import './components.css';

export const FamousPerson = ({ famousPerson, setFamousPerson }) => {
  const handleFamousPersonChoice = (event) => {
    setFamousPerson(event.target.value);
  }
  return (
    <div>
      <p className="question">Is there any famous person you would like to meet?</p>
      <input className="input-field" htmlFor="famous person" type="text" value={famousPerson} onChange={handleFamousPersonChoice} />
    </div>
  );
}

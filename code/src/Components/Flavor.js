import React from 'react';

const FourthQuestion = ({ flavor, onFlavorChange, onStepChange }) => {
  return (
    <form>
      <label htmlFor="flavor">Pick your popcorn flavor </label>
      <select value={flavor} onChange={onFlavorChange} id="flavor">
        <option value="">Select your favourite flavor</option>
        <option value="salty">Salty</option>
        <option value="sweet">Sweet</option>
        <option value="garlic">Garlic</option>
        <option value="butter">Butter</option>
      </select>
      <button onClick={onStepChange}>See overview</button>
    </form>
  );
};

// export default FourthQuestion;

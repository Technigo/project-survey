import React from 'react';

const SecondQuestion = ({ team, onTeamChange, onStepChange }) => {
  return (
    <form className="form">
      <label htmlFor="team">What team do you belong to?</label>
      <select id="team" value={team} onChange={onTeamChange}>
        <option value="" disabled selected>
          Select your team
        </option>
        <option value="turtles">Turtles 🐢</option>
        <option value="tigers">Tigers 🐯</option>
        <option value="foxes">Foxes 🦊</option>
        <option value="zebras">Zebras 🦓</option>
        <option value="elephants">Elephants 🐘</option>
        <option value="hippos">Hippos 🦛</option>
        <option value="lions">Lions 🦁</option>
      </select>
      <button className="button" onClick={onStepChange}>
        Next question
      </button>
    </form>
  );
};

export default SecondQuestion;

/* <form>
      
<label htmlFor="surnameInput">Type your surname: </label>
<input
  id="surnameInput"
  type="text"
  value={surnameInput}
  onChange={onSurnameInputChange}
/>
<button onClick={onStepChange}>Next question</button>
</form> */

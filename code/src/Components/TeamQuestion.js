import React from 'react';
import './teamQuestion.css';

const TeamQuestion = ({ team, onTeamChange, onStepChange }) => {
  return (
    <form className="form">
      <label>
        What team do you belong to?
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
      </label>
      <button className="button" onClick={onStepChange}>
        Next question
      </button>
    </form>
  );
};

export default TeamQuestion;

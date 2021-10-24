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
          <option value="turtles">Turtle {`\u{1F422}`}</option>
          <option value="tigers">Tigers {`\u{1F42F}`}</option>
          <option value="foxes">Foxes {`\u{1F98A}`}</option>
          <option value="zebras">Zebras {`\u{1F993}`}</option>
          <option value="elephants">Elephants {`\u{1F418}`}</option>
          <option value="hippos">Hippos {`\u{1F99B}`}</option>
          <option value="lions">Lions {`\u{1F981}`}</option>
        </select>
      </label>
      <button className="button" onClick={onStepChange}>
        Next question
      </button>
    </form>
  );
};

export default TeamQuestion;

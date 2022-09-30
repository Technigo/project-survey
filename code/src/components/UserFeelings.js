import React from 'react';

const UserFeelings = ({ userFeelings, setFeelings, userName, userTeam }) => {
  const handleUserFeelingsInputChange = (event) => {
    setFeelings(event.target.value)
  }
  return (
    <div className="input-field">
      <h2 className="sub-header"> So... you are in team <span className="color-accent">{userTeam}</span> uh!? Nice! :)</h2>
      <h2 className="question-title">How was your last weeks project, {userName}?</h2>
      <div className="custom-select">
        <select
          onChange={handleUserFeelingsInputChange}
          value={userFeelings}>
          <option value=""> Select your feeling</option>
          <option value="confusing">Confusing</option>
          <option value="great">Great</option>
          <option value="stressful">Stressful</option>
          <option value="awesome">Awesome</option>
          <option value="challenging">Challenging</option>
        </select>
      </div>
    </div>
  );
};

export default UserFeelings;
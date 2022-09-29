import React from 'react';

const UserFeelings = ({ userFeelings, setFeelings, userName }) => {
  const handleUserFeelingsInputChange = (event) => {
    setFeelings(event.target.value)
  }
  return (
    <div className="input-field">
      <h2 className="question-title"> How do you feel about last week project {userName} ?</h2>
      <div className="custom-select">
        <select
          onChange={handleUserFeelingsInputChange}
          value={userFeelings}>
          <option value=""> Select your feeling</option>
          <option value="confused">Confusing</option>
          <option value="great">Great</option>
          <option value="stressed">Stressful</option>
          <option value="awesome">Awesome</option>
          <option value="challenging">Challenging</option>
        </select>
      </div>
    </div>
  );
};

export default UserFeelings;
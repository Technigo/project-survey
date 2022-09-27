import React from 'react';

const UserFeelings = ({ feelings, setFeelings, name }) => {
  const handleUserFeelingsInputChange = (event) => {
    setFeelings(event.target.value)
  }
  return (
    <form>
      <h2> How do you feel about last week project {name} ?</h2>
      <select
        onChange={handleUserFeelingsInputChange}
        value={feelings}>
        <option value=""> Select your feeling</option>
        <option value="confusing">Confusing</option>
        <option value="great">Great</option>
        <option value="stressful">Stressful</option>
        <option value="awesome">Awesome</option>
        <option value="challenging">Challenging</option>
      </select>
    </form>
  );
};

export default UserFeelings;
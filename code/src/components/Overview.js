import React from 'react';

const Overview = ({
  nameInput,
  ageInput,
  weightInput,
  heightInput,
  hipInput,
  waistInput,
  activityInput
}) => {
  return (
    <div>
      <h1>{nameInput}&apos;s Overall Health Overview</h1>
      <p>{ageInput}</p>
      <p>{weightInput}</p>
      <p>{heightInput}</p>
      <p>{hipInput}</p>
      <p>{waistInput}</p>
      <p>{activityInput}</p>
    </div>
  );
};

export default Overview;

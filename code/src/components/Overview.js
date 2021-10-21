import React from 'react';

const Overview = ({
  nameInput,
  ageInput,
  weightInput,
  heightInput,
  hipInput,
  waistInput,
  activityInput,
  sliderAInput,
  sliderBInput
}) => {
  const h2 = heightInput * heightInput;
  const BMI = weightInput / h2;
  const WHR = waistInput / hipInput;
  return (
    <section className='overview-container'>
      <h1>{nameInput}&apos;s Overall Health Overview</h1>
      <p>{ageInput}</p>
      <p>{weightInput}</p>
      <p>{heightInput}</p>

      <p>BMI: {BMI.toFixed(2)}</p>
      <p>{hipInput}</p>
      <p>{waistInput}</p>

      <p>Waist-to-Hip Ratio: {WHR.toFixed(2)}</p>
      <p>{activityInput}</p>
      <p>{sliderAInput}</p>
      <p>{sliderBInput}</p>
    </section>
  );
};

export default Overview;

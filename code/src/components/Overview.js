import React from 'react';
import './Overview.css';

import ProgressBar from '@ramonak/react-progress-bar';

const Overview = ({
  nameInput,
  ageInput,
  weightInput,
  heightInput,
  hipInput,
  waistInput,
  activityInput,
  sliderAInput,
  sliderBInput,
  step,
  onEndSurvey
}) => {
  const h2 = heightInput * heightInput;
  const BMI = weightInput / h2;
  const WHR = waistInput / hipInput;
  return (
    <div className='overview-container'>
      <div className='spacing'> </div>
      <section className='overview-content'>
        <h1>{nameInput}&apos;s Overall Health Overview</h1>

        <div className='AWH-info'>
          <p>
            <span>Age:</span> {ageInput}
          </p>
          <p>
            <span>Weight:</span> {weightInput}
          </p>
          <p>
            <span>Height:</span>
            {heightInput}
          </p>
        </div>

        <div className='BMI-info'>
          <p>
            <span>BMI:</span> {BMI.toFixed(2)}
          </p>
          <p>
            {(() => {
              switch (true) {
                case BMI.toFixed(2) < 18.5:
                  return 'Underweight';
                case BMI.toFixed(2) <= 24.9 && BMI.toFixed(2) >= 18.5:
                  return 'Healthy Weight';
                case BMI.toFixed(2) <= 29.9 && BMI.toFixed(2) >= 25:
                  return 'Overweight';
                case BMI.toFixed(2) > 30:
                  return 'Obesity';
                default:
                  return 'no data found';
              }
            })()}
          </p>
        </div>

        <div className='WHR-info'>
          <h3>For women:</h3>
          <p>
            <span>Waist-to-Hip Ratio:</span>
            {WHR.toFixed(2)}
          </p>
          <p>
            {(() => {
              switch (true) {
                case WHR.toFixed(2) < 0.85:
                  return 'Low Risk';
                case WHR.toFixed(2) <= 0.9 && WHR.toFixed(2) >= 0.85:
                  return 'Moderate Risk';
                case WHR.toFixed(2) > 0.9:
                  return 'High Risk';
                default:
                  return 'no data found';
              }
            })()}
          </p>
          <h3>For men:</h3>
          <p>
            <span>Waist-to-Hip Ratio:</span> {WHR.toFixed(2)}
          </p>
          <p>
            {(() => {
              switch (true) {
                case WHR.toFixed(2) < 0.9:
                  return 'Low Risk for Cardiovascular diseases';
                case WHR.toFixed(2) <= 0.95 && WHR.toFixed(2) >= 0.9:
                  return 'Moderate Risk for Cardiovascular diseases';
                case WHR.toFixed(2) > 0.95:
                  return 'High Risk for Cardiovascular diseases';
                default:
                  return 'no data found';
              }
            })()}
          </p>
        </div>

        <div className='other-info'>
          <p>
            <span>Physical Activity:</span>
          </p>
          <p>
            {(() => {
              switch (activityInput) {
                case '>5,000 steps':
                  return 'Sedentary Lifestyle';
                case '7,500 steps':
                  return 'Low Active Lifestyle';
                case '10,000 steps':
                  return 'Moderate Active Lifestyle';
                case '12,500 steps':
                  return 'Highly Active Lifestyle ';
                default:
                  return 'no data found';
              }
            })()}
          </p>
          <p>
            <span>Smoking Habit:</span>
            {(() => {
              switch (true) {
                case sliderAInput === 0:
                  return 'Non-Smoker';
                case sliderAInput <= 30 && sliderAInput > 0:
                  return 'Low Intensity Smoker';
                case sliderAInput <= 75 && sliderAInput >= 30:
                  return 'Moderate Intensity Smoker';
                case sliderAInput > 75:
                  return 'High Intensity Smoker';
                default:
                  return 'no data found';
              }
            })()}
          </p>
          <p>
            <span>Drinking Habit:</span>
            {(() => {
              switch (true) {
                case sliderBInput < 30:
                  return 'Occasional Drinker';
                case sliderBInput <= 75 && sliderBInput >= 30:
                  return 'Moderate Drinker';
                case sliderBInput > 75:
                  return 'Heavy Drinker';
                default:
                  return 'no data found';
              }
            })()}
          </p>
        </div>
      </section>
      <div className='progress-bar overview-progress-bar'>
        <ProgressBar completed={step * 10} />
      </div>
      <button type='button' className='end-survey-btn' onClick={onEndSurvey}>
        End Survey
      </button>
    </div>
  );
};

export default Overview;

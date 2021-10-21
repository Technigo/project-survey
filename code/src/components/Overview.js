import React from 'react';
import './Overview.css';

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

      <div className='AWH-info'>
        <p>Age: {ageInput}</p>
        <p>Weight: {weightInput}</p>
        <p>Height:{heightInput}</p>
      </div>

      <div className='BMI-info'>
        <p>BMI: {BMI.toFixed(2)}</p>
      </div>

      <div className='WHR-info'>
        <h2>
          Waist to Hip Ratio is a useful measure of fat distribution. f you have
          more weight around your waist you have a greater risk of lifestyle
          related diseases such as heart disease and diabetes than those with
          weight around their hips. Ideally, women should have a waist-to-hip
          ratio of 0.8 or less, whereas men should have a waist-to-hip ratio of
          0.95 or less.{' '}
        </h2>
        <h3>For women:</h3>
        <p>Waist-to-Hip Ratio:{WHR.toFixed(2)}</p>
        <p>
          {(() => {
            switch (true) {
              case WHR.toFixed(2) < 0.85:
                return 'low risk';
              case WHR.toFixed(2) <= 0.9 && WHR.toFixed(2) >= 0.85:
                return 'moderate risk';
              case WHR.toFixed(2) > 0.9:
                return 'high risk';
              default:
                return 'no data found';
            }
          })()}
        </p>
        <h3>For men:</h3>
        <p>Waist-to-Hip Ratio: {WHR.toFixed(2)}</p>
        <p>
          {(() => {
            switch (true) {
              case WHR.toFixed(2) < 0.9:
                return 'low risk';
              case WHR.toFixed(2) <= 0.95 && WHR.toFixed(2) >= 0.9:
                return 'moderate risk';
              case WHR.toFixed(2) > 0.95:
                return 'high risk';
              default:
                return 'no data found';
            }
          })()}
        </p>
      </div>

      <div className='other-info'>
        <p>Physical Activity: {activityInput}</p>
        <p>
          {(() => {
            switch (activityInput) {
              case '>5,000 steps':
                return 'Sedentary lifestyle';
              case '7,500 steps':
                return 'Low active lifestyle';
              case '10,000 steps':
                return 'Moderate active lifestyle';
              case '12,500 steps':
                return 'Highly active lifestyle ';
              default:
                return 'no data found';
            }
          })()}
        </p>
        <p>
          Smoking habit:
          {(() => {
            switch (true) {
              case sliderAInput < 30:
                return 'low intensity smoker';
              case sliderAInput <= 75 && sliderAInput >= 30:
                return 'moderate intensity smoker';
              case sliderAInput > 75:
                return 'high intensity smoker';
              default:
                return 'no data found';
            }
          })()}
        </p>
        <p>
          Drinking habit:
          {(() => {
            switch (true) {
              case sliderBInput < 30:
                return 'occasional drinker';
              case sliderBInput <= 75 && sliderBInput >= 30:
                return 'moderate drinker';
              case sliderBInput > 75:
                return 'heavy drinker';
              default:
                return 'no data found';
            }
          })()}
        </p>
      </div>
    </section>
  );
};

export default Overview;

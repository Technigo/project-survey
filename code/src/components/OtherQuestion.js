import React from 'react';
import './OtherQuestion.css';

import ProgressBar from '@ramonak/react-progress-bar';

const OtherQuestion = ({
  onStepChange,
  sliderAInput,
  onSliderAInputChange,
  sliderBInput,
  onSliderBInputChange,
  step
}) => {
  return (
    <div className='form-container'>
      <form className='other-question-content'>
        <label htmlFor={sliderAInput}>
          How much do you smoke?
          <input
            type='range'
            min='1'
            max='100'
            value={sliderAInput}
            onChange={onSliderAInputChange}
            className='slider'
            id={sliderAInput}
            required
          />
          <div className='slider-text'>
            <div>not at all</div>
            <div>very much</div>
          </div>
        </label>
        <label htmlFor={sliderBInput}>
          How much do you drink?
          <input
            type='range'
            min='1'
            max='100'
            value={sliderBInput}
            onChange={onSliderBInputChange}
            className='slider'
            id={sliderBInput}
            required
          />
          <div className='slider-text'>
            <div>not at all</div>
            <div>very much</div>
          </div>
        </label>
        <button type='button' onClick={onStepChange}>
          Next question
        </button>
      </form>
      <div className='progress-bar'>
        <ProgressBar completed={step * 10} />
      </div>
    </div>
  );
};

export default OtherQuestion;

import React from 'react';
import './OtherQuestion.css';

const OtherQuestion = ({
  onStepChange,
  sliderAInput,
  onSliderAInputChange,
  sliderBInput,
  onSliderBInputChange
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
    </div>
  );
};

export default OtherQuestion;

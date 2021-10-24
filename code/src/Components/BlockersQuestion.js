import React from 'react';
import './blockersQuestion.css';

const BlockersQuestion = ({
  blockers,
  onBlockersChange,
  onStepChange,
  handleShowOverview,
}) => {
  const renderButton = () => {
    if (blockers === 'yes') {
      return (
        <button className="button" onClick={onStepChange}>
          Next question
        </button>
      );
    } else {
      return (
        <button className="button" onClick={handleShowOverview}>
          Overview
        </button>
      );
    }
  };

  return (
    <form className="form radio">
      Do you have any blockers?
      <label>
        <span className="radio-input">
          <input
            type="radio"
            value="yes"
            onChange={() => onBlockersChange('yes')}
            checked={blockers === 'yes'}
          />
          <span className="radio-text">Yes</span>
        </span>
      </label>
      <label>
        <span className="radio-input">
          <input
            type="radio"
            value="no"
            onChange={() => onBlockersChange('no')}
            checked={blockers === 'no'}
          />
          <span className="radio-text">No</span>
        </span>
      </label>
      {renderButton()}
    </form>
  );
};

export default BlockersQuestion;

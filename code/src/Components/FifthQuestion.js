import React from 'react';

const FifthQuestion = ({
  blockers,
  onBlockersChange,
  onStepChange,
  handleShowOverview,
}) => {
  // tänker att handleShowOverview är en egen function som visar den sista sidan.

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
    console.log('HANDLE', handleShowOverview);
  };

  return (
    <form className="form">
      Do you have any blockers?
      <label>
        <input
          type="radio"
          value="yes"
          onChange={() => onBlockersChange('yes')}
          checked={blockers === 'yes'}
        />
        Yes
      </label>
      <label>
        <input
          type="radio"
          value="no"
          onChange={() => onBlockersChange('no')}
          checked={blockers === 'no'}
        />
        No
      </label>
      {renderButton()}
    </form>
  );
};

export default FifthQuestion;

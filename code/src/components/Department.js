import React from 'react';

export const Department = ({
  department,
  setDepartment,
  handleStepDecrease,
  handleStepIncrease
}) => {
  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value);
  }
  return (
    <div className="questionWrapper">
      <h3 className="departmentQuestion" htmlFor="Department">Which department do you work in?</h3>
      <label htmlFor="department">
        <input type="text" className="department" value={department} onChange={handleDepartmentChange} />
      </label>
      <div className="buttonContainer">
        <button type="button" className="buttonBack" onClick={handleStepDecrease}>Back</button>
        <button type="button" className="buttonNext" onClick={handleStepIncrease}>Next</button>
      </div>
    </div>
  );
};
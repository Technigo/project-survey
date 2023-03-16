import React from 'react';

export const Department = ({ department, setDepartment }) => {
  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value);
  }
  return (
    <div className="questionWrapper">
      <h3>Which department do you work in?</h3>
      <input type="text" value={department} onChange={handleDepartmentChange} />
    </div>
  );
};


import React from 'react';

export const Department = ({ department, setDepartment }) => {
  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value);
  }
  return (
    <>
      <p>Which department do you work in?</p>
      <input type="text" value={department} onChange={handleDepartmentChange} />
    </>
  );
};


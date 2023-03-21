/* eslint-disable linebreak-style */
import React from 'react';

export const Job = ({ job, setJob }) => {
  const handleJobChange = (event) => {
    setJob(event.target.value);
  };
  return (
    <>
      <p>Please select a profession</p>
      <select value={job} onChange={handleJobChange}>
        <option value=" ">Select a job</option>
        <option value="Doctor">Doctor</option>
        <option value="Teacher">Teacher</option>
        <option value="Lawyer">Lawyer</option>
        <option value="Developer">Developer</option>
        <option value="Barista">Barista</option>
        <option value="Comedian">Comedian</option>
        <option value="Musician">Musician</option>
      </select>
    </>
  )
}
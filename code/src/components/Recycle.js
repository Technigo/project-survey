import React from 'react';

/* This component is a dropdown menu where the user picks on of the alternatives */
export const Recycle = ({ recycle, setRecycle }) => (
  <div className="question-wrapper">
    <div className="question">
      <h2 className="label" htmlFor="option">How do you recyle your waste?</h2>
      <select
        onChange={(e) => setRecycle(e.target.value)}
        className="inputAndSelect"
        value={recycle}>
        <option value="">Select recycling option</option>
        <option value="I recycle my trash">I recycle my waste</option>
        <option value="I dont recycle my trash">I dont recycle my waste</option>
        <option value="I recycle my trash if someone sees me">I recycle my waste if someone sees me</option>
        <option value="I recycle other peoples trash">I recycle other peoples waste</option>

      </select>
    </div>
  </div>
)

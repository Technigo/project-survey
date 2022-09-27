import React from 'react';

export const Recycle = ({ recycle, setRecycle }) => (
  <div className="question-wrapper">
    <div className="question">
      <h2>What is your favourite food?</h2>
      <select
        onChange={(e) => setRecycle(e.target.value)}
        value={recycle}>
        <option value="">Select recycling option</option>
        <option value="I recycle my trash">I recycle my trash</option>
        <option value="I don't recycle my trash">I don't recycle my trash</option>
        <option value="I recycle my trash if someone sees me">I recycle my trash if someone sees me</option>
        <option value="I recycle other peoples trash">I recycle other peoples trash</option>

      </select>
    </div>
  </div>
)

/* <input type="text" value={recycle} onChange={handleRecycleChange} /> */

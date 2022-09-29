import React from 'react';

export const Recycle = ({ recycle, setRecycle }) => (
  <div className="question-wrapper">
    <div className="question">
      <label htmlFor="option">How do you recyle your waste?</label>
      <select
        onChange={(e) => setRecycle(e.target.value)}
        value={recycle}>
        <option value="">Select recycling option</option>
        <option value="I recycle my trash">I recycle my waste</option>
        <option value="I don't recycle my trash">I don't recycle my waste</option>
        <option value="I recycle my trash if someone sees me">I recycle my waste if someone sees me</option>
        <option value="I recycle other peoples trash">I recycle other peoples waste</option>

      </select>
    </div>
  </div>
)

/* <input type="text" value={recycle} onChange={handleRecycleChange} /> */

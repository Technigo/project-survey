import React from 'react';

export const Recycle = ({ recycle, setRecycle }) => (
  <>
    <h2>What is your favourite food?</h2>
    <form>
      <select
        onChange={(e) => setRecycle(e.target.value)}
        value={recycle}>
        <option value="">Select recycling option</option>
        <option value="I recycle my trash">I recycle my trash</option>
        <option value="I don't recycle my trash">I don't recycle my trash</option>
        <option value="I recycle my trash if someone sees me">I recycle my trash if someone sees me</option>
        <option value="I recycle other peoples trash">I recycle other peoples trash</option>

      </select>
    </form>
  </>
)

/* <input type="text" value={recycle} onChange={handleRecycleChange} /> */

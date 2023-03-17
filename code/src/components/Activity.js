import React from 'react';

export const Activity = ({ activity, setActivity, handleStepIncrease, handleStepDecrease }) => {
  return (
    <div className="questionWrapper">
      <h3>Which activity sounds the most fun?</h3>
      <select
        className="selectOptions"
        onChange={(e) => setActivity(e.target.value)}
        value={activity}>
        <option value="" disabled>Select activity option 👇</option>
        <option value="rock climbing 🧗">rock climbing 🧗</option>
        <option value="a painting class 🎨">a painting class 🎨</option>
        <option value="a wine-tasting tour 🍷">a wine-tasting tour 🍷</option>
      </select>
      <div className="buttonContainer">
        <button type="button" className="buttonBack" onClick={handleStepDecrease}>Back</button>
        <button type="button" className="buttonSubmit" onClick={handleStepIncrease}>Submit</button>
      </div>
    </div>
  );
}

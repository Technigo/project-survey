import React from 'react';

export const Activity = ({ activity, setActivity, handleStepIncrease, handleStepDecrease }) => {
  return (
    <div className="questionWrapper">
      <label htmlFor="activitySelect">
        <h3>Which activity sounds the most fun?</h3>
        <select
          id="activitySelect"
          className="selectOptions"
          onChange={(e) => setActivity(e.target.value)}
          value={activity}>
          <option value="" disabled>Select activity option 👇</option>
          <option value="rock climbing 🧗" aria-label="rock climbing option">rock climbing 🧗</option>
          <option value="a painting class 🎨" aria-label="painting class option">a painting class 🎨</option>
          <option value="a wine-tasting tour 🍷" aria-label="wine-tasting tour option">a wine-tasting tour 🍷</option>
        </select>
      </label>
      <div className="buttonContainer">
        <button type="button" className="buttonBack" onClick={handleStepDecrease} aria-label="Go back">Back</button>
        <button type="button" className="buttonSubmit" onClick={handleStepIncrease} aria-label="submit your survey responses">Submit</button>
      </div>
    </div>
  );
}

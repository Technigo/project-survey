import React from 'react';

export const Activity = ({ activity, setActivity }) => {
  return (
    <div>
      <h2>Which activity sounds the most fun?</h2>
      <select
        onChange={(e) => setActivity(e.target.value)}
        className="inputAndSelect"
        value={activity}>
        <option value="">Select activity option</option>
        <option value="rock climbing">rock climbing</option>
        <option value="a painting class">a painting class</option>
        <option value="a wine tasting tour">a wine tasting tour</option>
      </select>
      {/* add a submit button */}
    </div>
  );
}

import React from 'react';

export const Activity = ({ activity, setActivity }) => {
  const handleActivityChange = (event) => {
    setActivity(event.target.value);
  }
  return (
    <div>
      <h2>Which team-activity sounds the most fun?</h2>
      <select
        onChange={(e) => setActivity(e.target.value)}
        className="inputAndSelect"
        value={activity}>
        <option value="">Select activity option</option>
        <option value="a competitive game of football">a competitive game of football</option>
        <option value="chilling in the spa">chilling in the spa</option>
        <option value="a wine tasting tour">a wine tasting tour</option>
      </select>
      <input type="drop" value={activity} onChange={handleActivityChange} />

    </div>
  );
}

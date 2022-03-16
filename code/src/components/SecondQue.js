import React from "react";

const SecondQue = ({ HolidayInput, HolidayInputChange, Change }) => {
  return (
    <form>
      <label>
        How does a perfect holiday look for you?
        <select
          value={HolidayInput}
          onChange={(event) => HolidayInputChange(event.target.value)}
        >
          <option value="">Select one</option>
          <option value="Beaches">Warm Sunny Beaches</option>
          <option value="Mountains">Cabin in the mountains</option>
          <option value="Cruising">A cruise trip</option>
          <option value="Trekking">Trekking</option>
        </select>
      </label>

      <button onClick={Change}>➤</button>
    </form>
  );
};

export default SecondQue;

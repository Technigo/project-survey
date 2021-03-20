import React from "react";

function Week({ onWhichWeekChange, whichWeek }) {
  return (
    <>
      <form action="/action_page.php">
        <h3>Which week's result do you want to register?</h3>
        <div>
          <label htmlFor="week">Select a week:</label>
          <input
            type="week"
            id="week"
            name="week"
            weekvalue={whichWeek}
            onChange={onWhichWeekChange}
          />
        </div>
      </form>
    </>
  );
}

export default Week;

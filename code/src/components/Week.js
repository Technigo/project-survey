import React, { useState } from "react";

import "./components.css";

function Week( {onWhichWeekChange, whichWeek} ) {
  
  return (
    <>
      <h3>Which week's result do you want to register?</h3>
      <form action="/action_page.php">
        <label htmlFor="week">Select a week:</label>
        <input type="week" id="week" name="week" value={whichWeek} onChange={onWhichWeekChange}/>
        <input type="submit" value="Submit" />
        <button>Click to add your result</button>
      </form>
    </>
  );
}

export default Week;

import React, { useState } from "react";


export const Question1 = (props) => {
  const [happy, setHappy] = useState("");

  return (
    <div>
      <form>
        <h2>How was your day?</h2>
        <select
          onChange={event => setHappy(event.target.value)}
          value={happy}
          required
        >
          <option value="">Select answer</option>
          <option value="an ok day">Ok</option>
          <option value="a great day">Great</option>
          <option value="the best day ever">The best</option>
        </select>
        <p>You had {happy} today.</p>
      </form>
      <button>next</button>
    </div>
  )
}
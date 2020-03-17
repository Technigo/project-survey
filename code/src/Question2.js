import React, { useState } from "react";


export const Question2 = () => {
  const [day, setDay] = useState("");

  return (
    <div className="question1">
      <form>
        <h2>What are you most proud of from today?</h2>
        <input
          type="text"
          onChange={event => setDay(event.target.value)}
          value={day}
          required
        />
        <p>You should be really proud of {day}</p>
        <button>next</button>
      </form>
    </div>
  )
}


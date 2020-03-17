import React, { useState } from "react";


export const Question3 = () => {
  const [smile, setSmile] = useState("");

  return (
    <form>
      <h2>Did you make someone smile?</h2>
      <label>
        <input
          type="radio"
          value="Yes"
          onChange={event => setSmile(event.target.value)}
          checked={smile === "Yes"}
        />
        <p>Yes</p>
      </label>
      <label>
        <input
          type="radio"
          value="No"
          onChange={event => setSmile(event.target.value)}
          checked={smile === "No"}
        />
        <p>No</p>
      </label>
      <label>
        <input
          type="radio"
          value="Maybe"
          onChange={event => setSmile(event.target.value)}
          checked={smile === "Maybe"}
          required
        />
        <p>Maybe</p>
      </label>
      {smile === "Yes" && <p>You made someone smile today.</p>}
      <button>Done</button>

    </form>
  )
}
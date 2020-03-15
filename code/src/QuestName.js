import React, { useState } from "react";

export const Myname = () => {

  const [text, setText] = useState("");

  return (
    <label>
      <h3>What is your name?</h3>
      <input
      type="text"
      required
      placeholder="name here.."
      onChange={(event) => setText(event.target.value)}
      value={text}
      onKeyPress={(event) => event.key === "Enter" && event.preventDefault()}
      />
    </label>

  )
}
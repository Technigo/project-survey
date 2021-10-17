import React from "react";
import { useState } from "react";

const Name = (props) => {
  const [name, setName] = useState("Already in the name box");
  return (
    <>
      <h1>Hello, {name}!</h1>
      <p>I’m a form with three questions about cats. Are you ready to start?</p>

      <form>
        <input
          type="text"
          onChange={(event) => setName(event.target.value)}
          value={name}
        />
      </form>
    </>
  );
};

export default Name;

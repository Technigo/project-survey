import React, { useState } from "react";
import {Summary} from "./Summary"



export const Input = () => {
  const [mail, setMail] = useState("");
  const [name, setName] = useState("");
  const [showSummary, setSummary] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setSummary(true);
  };
  return (
    <div>
    <form onSubmit={handleSubmit}>
      <h1>Email: {mail} </h1>
      <input
        type="text"
        onChange={event => setMail(event.target.value)}
        value={mail}
        required
      />
      <h1>Username: {name} </h1>
      <input
        type="text"
        onChange={event => setName(event.target.value)}
        value={name}
        required
      />
      <button type="submit">submit</button>
    </form>
    {showSummary && (
      <Summary name={name}/>
    )}
    </div>
  );
};




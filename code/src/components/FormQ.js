import React, { useState } from "react";

export const FormQ = () => {
  const [name, setName] = useState("");

  return (
    <form onSubmit={event => event.preventDefault()}>
      <h1>What is your dogs name?</h1>
      <input
        type="text"
        onChange={event => setName(event.target.value)}
        value={name}
      />
    </form>
  );
};

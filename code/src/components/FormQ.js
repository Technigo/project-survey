import React, { useState } from "react";

export const FormQ = () => {
  const [name, setName] = useState("");

  return (
    <form onSubmit={handleSubmit}>
      <h2>What is your dogs name?</h2>

      <input
        className="inputText"
        type="text"
        onChange={event => setName(event.target.value)}
        required
        value={name}
        // name="dogName"
        placeholder="Enter your dogs name..."
      />
    </form>
  );
};

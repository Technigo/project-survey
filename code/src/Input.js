import React, { useState } from "react";


export const Input = () => {
  const [name, setName] = useState("");

  return (
    <form>
      <h1>Username: {name} </h1>
      <input
        type="text"
        onChange={event => setName(event.target.value)}
        value={name}
      />
    </form>
  );
};




import React, { useState } from "react";

const Textfield = () => {
  const [inputName, setInputName] = useState("");

  return (
    <form onSubmit={event => event.preventDefault()}>
      Please state your name: {inputName}
      <input
        type="text"
        id="inputName"
        onChange={(event) => setInputName(event.target.value)}
        value={inputName}
      />
    </form>
  );
};

export default Textfield;
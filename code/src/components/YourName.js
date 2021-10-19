import React, { useState } from "react";

const YourName = () => {
  const [name, setName] = useState("");
  // v1
  return (
    <form className="name-container">
      <label htmlFor="nameInput">Name:</label>
      <input id="nameInput" type="text" value={name} />
      {/* <label htmlFor="lastnameInput">Last name:</label>
      <input id="lastnameInput" type="text" /> */}
      <button>Next question</button>
    </form>
  );
};

export default YourName;

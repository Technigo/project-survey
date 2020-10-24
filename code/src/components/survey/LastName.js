import React, { useState } from "react";

const LastName = ({ onSubmit }) => {
  const [lastName, setLastName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({
      lastName,
    });
  };

  return (
    <form className="forms-container" onSubmit={handleSubmit}>
      <label htmlFor="lastName">
        Last Name:
        <input
          type="text"
          id="lastName"
          placeholder="Your Last Name"
          onChange={(event) => setLastName(event.target.value)}
          value={lastName}
          required
          pattern="([A-Za-z]|\s)*"
        />
      </label>

      <input className="forms-container__submit" type="submit" value="Submit" />
    </form>
  );
};

export default LastName;

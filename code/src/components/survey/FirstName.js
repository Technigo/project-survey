import React, { useState } from "react";

const FirstName = ({ onSubmit }) => {
  const [firstName, setFirstName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({
      firstName,
    });
  };

  return (
    <form className="forms-container" onSubmit={handleSubmit}>
      <label htmlFor="firstName">
        First Name:
        <input
          type="text"
          id="firstName"
          placeholder="Your First Name"
          onChange={(event) => setFirstName(event.target.value)}
          value={firstName}
          required
          pattern="([A-Za-z]|\s)*"
        />
      </label>

      <input className="forms-container__submit" type="submit" value="Submit" />
    </form>
  );
};

export default FirstName;

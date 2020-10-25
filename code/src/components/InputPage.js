import React from "react";
import Input from "./Input";

const InputPage = ({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  setEmail,
}) => {
  return (
    <div>
      <h2>Your contact details</h2>

      <Input
        placeholder={"First name:"}
        setState={setFirstName}
        value={firstName}
      />
      <Input
        placeholder={"Last name:"}
        setState={setLastName}
        value={lastName}
      />
      <Input placeholder={"Email:"} setState={setEmail} value={email} />
    </div>
  );
};

export default InputPage;

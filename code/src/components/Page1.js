import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";

const Page1 = ({ handleNextPage, handlePrevPage }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  console.log(firstName);
  console.log(lastName);
  console.log(email);

  return (
    <div>
      <h2>Your contact details</h2>
      <Input placeholder={"Your first name"} setChange={setFirstName} />
      <Input placeholder={"Your last name"} setChange={setLastName} />
      <Input placeholder={"Your email"} setChange={setEmail} />
      <Button buttonText={"back"} handleClick={handlePrevPage} />
      <Button buttonText={"Next"} handleClick={handleNextPage} />
    </div>
  );
};

export default Page1;

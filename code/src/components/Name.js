/* eslint-disable max-len */
import React from 'react';

// the part below is a function that makes a name written with a capital letter
// event.target.value.slice(1) is a function that selects all the characters of the name after the first character (so everything except the first character)
const Name = ({ name, setName }) => {
  const handleNameChange = (event) => {
    console.log(event.target.value);
    const changeNameCapitalLetter = event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1);
    setName(changeNameCapitalLetter);
  }
  return (
    <section className="">
      <h1 className="header-copy">What&apos;s your name?</h1>
      <input
        type="text"
        id="name-imput"
        className="name-imput"
        name="name"
        value={name}
        onChange={handleNameChange}
        placeholder="Type name here"
        maxLength={30}
        required />
    </section>
  );
};
export default Name;
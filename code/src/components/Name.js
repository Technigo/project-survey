/* eslint-disable max-len */
import React from 'react';
import ButtonNext from './ButtonNext';

// the part below is a function that makes a name written with a capital letter
// event.target.value.slice(1) is a function that selects all the characters of the name after the first character (so everything except the first character)
const Name = ({ name, onNameChange, onClickNext }) => {
  return (
    <section className="content-container">
      <div className="name-container">
        <h1 className="header-copy">What&apos;s your name?</h1>
        <input
          type="text"
          id="name-imput"
          name="name-input"
          className="name-imput"
          value={name}
          onChange={onNameChange}
          maxLength={30}
          required />
      </div>
      <div className="button-container">
        <ButtonNext button="Next" onClickNext={onClickNext} />
      </div>
    </section>
  );
};
export default Name;
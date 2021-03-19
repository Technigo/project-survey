import React from 'react';

const Textfield = ({ inputName, setInputName }) => {

  return (
    <form onSubmit={event => event.preventDefault()} tabIndex="0">
      Please start the survey by stating your name: 
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
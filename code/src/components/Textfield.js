import React from 'react';

const Textfield = ({ inputName, setInputName }) => {

  return (
    <form className="text-field" onSubmit={event => event.preventDefault()} tabIndex="0">
      <h4>
      Please start the survey by stating your name: 
      </h4>
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
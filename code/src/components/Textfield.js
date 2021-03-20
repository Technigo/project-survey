import React from 'react';

import './TextField.css'

const Textfield = ({ inputName, setInputName }) => {

  return (
    <form className="text-field" onSubmit={event => event.preventDefault()} tabIndex="0">
      <h4 className="input-name-heading">
      Please start the survey by stating your name: 
      </h4>
      <input 
        className="input-field"
        type="text"
        id="inputName"
        onChange={(event) => setInputName(event.target.value)}
        value={inputName}
      />
    </form>
  );
};

export default Textfield;
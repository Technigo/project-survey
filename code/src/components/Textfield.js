import React, { useState } from 'react';

const Textfield = () => {
  const [inputName, setInputName] = useState('');

  return (
    <form onSubmit={event => event.preventDefault()} tabIndex="0">
      Please state your name: 
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
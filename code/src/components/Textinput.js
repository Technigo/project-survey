import React from 'react';

import 'components/TextinputCss.css';


export const Textinput = ({questionName, name, setName}) => {
  
  return (
    <label htmlFor="name" id="name">
      <h2 tabindex="0">1. What's your name?</h2>
      <input
        type="text"
        onChange={(event) => setName(event.target.value)}
        value={name}
        required
      />
    </label>
  );
};



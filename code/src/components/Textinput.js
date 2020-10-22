import React from 'react';

import  TextinputCss  from 'components/TextinputCss.css';


export const Textinput = ({questionName, name, setName}) => {
  
    return (
     <label>
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


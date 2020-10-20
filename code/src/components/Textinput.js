import React, { useState } from 'react';
import  TextinputCss  from 'components/TextinputCss.css';


const Textinput = (props) => {
    const [name, setName] = useState('');
  
    return (
    <>
    <form onSubmit={(event) => event.preventDefault()}>
      <h2>{props.questionName}</h2>
      <input
        type="text"
        onChange={(event) => setName(event.target.value)}
        value={props.name}
      />
    </form>
    </>
    );
};

export default Textinput
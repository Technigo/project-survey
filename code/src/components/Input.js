import React, { useState } from 'react';

const Input = (props) => {
    const [username, setUsername] = useState('');
  return (
    <div>
      <label>{props.question}</label>
      <input type="text" value={username} onChange={(event) => setUsername(event.target.value)}/>
      {/* <button onClick={(event) => setUsername(event.target.value)}>OK!</button> */}
    </div>
  )
}

export default Input;
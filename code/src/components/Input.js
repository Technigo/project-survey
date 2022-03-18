import React from 'react';

const Input = ({ question, inputvalue, onInputChange }) => {
    //const [inputvalue, setUsername] = useState('');
  return (
    <div>
      <label htmlFor="input">{question}</label>
      <input id="input" type="text" value={inputvalue} onChange={onInputChange}/>
      {/* <button onClick={(event) => setUsername(event.target.value)}>OK!</button> */}
    </div>
  )
}

export default Input;
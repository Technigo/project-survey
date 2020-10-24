import React from 'react'

// Name
const InputName = ({ question, name, setName }) => {
  
  return (
    <div className="input-name"> 
      <label 
        className="input-text-label" 
        htmlFor="InputText"> 
        <h3>{question}</h3> 
        <input
          className="input-text"
          id="InputText"
          placeholder="Type your name"
          type="text"
          onChange={event => setName(event.target.value)} //Here I would add {onNameChange} that Max talked about @lecture wed 38:00??
          value={name}
          required
          minLength="2"
        />
      </label>
    </div>
  );
};
export default InputName;
import React from 'react'

const InputName = ({ question, name, setName }) => {
  
  return (
    <div className="input-name"> 
      <label 
        className="input-text-label" 
        htmlFor="InputText"> 
        <h3 tabIndex="0">{question}</h3> 
        <input
          className="input-text"
          id="InputText"
          placeholder="Type your name"
          type="text"
          value={name}
          required //This don't work. I don't know why.
          minLength="2" //This don't work. I don't know why.
          onChange={event => setName(event.target.value)}
          onKeyPress={event => {
						event.key === 'Enter' && event.preventDefault();
					}}
        />
      </label>
    </div>
  );
};
export default InputName;
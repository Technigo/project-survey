import React from 'react'


// Name
const InputName = ({ question, name, setName }) => {
  
  return (
    // <form
    //   className="name-form"
    //   onSubmit={event => event.preventDefault()}
    // >
      <label htmlFor="InputText"> 
        <h3>{question}</h3> 
        <input
          id="InputText"
          type="text"
          onChange={event => setName(event.target.value)}
          value={name}
          required
          minLength="2"
        />
      </label>

    // </form>
  );
};
// How do I make it so that when the user writes their name and 
// press a button that says continue, a text is shown that says Welcome 'name'? 
// And then all the questions appear...??
export default InputName
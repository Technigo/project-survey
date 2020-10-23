import React from 'react';

export const Text = ({ name, setName }) => {
  //const [name, setName] = useState("");
  return(
    <div>
      <h2>Please enter your name: </h2>
      <input
        onKeyPress={event => {event.key === 'Enter' && event.preventDefault();}}
        type="text"
        onChange={event => setName(event.target.value)}
        value={name}
        placeholder="Enter name here"
        required
        minLength="2"
      />
    </div> /*onSubmit={(event) => event.preventDefault()}*/
  
  );
};
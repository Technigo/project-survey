import React, {useState} from 'react'


export const SingleLine = () => {

const [name, setName] = useState("");

  return (
    <form onSubmit={event => event.preventDefault()} className="question-section" required>
      <h1>Current name: {name}! </h1>
      <input type="text"
      onChange={event => setName(event.target.value)}
      value={name}
      />
    </form>
  );
};


export default SingleLine

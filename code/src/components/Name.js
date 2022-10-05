import React from 'react';

export const Name = ({ name, setName }) => {
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <form className="nameForm" onSubmit={(event) => event.preventDefault()}>
      <p>
        What do you want to celebrate?
      </p>
      <input type="text" className="nameInputField" aria-label="Write your name here" value={name} onChange={handleNameChange} />
    </form>
  );
};

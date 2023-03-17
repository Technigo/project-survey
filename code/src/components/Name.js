import React from 'react';

export const Name = ({ name, setName, counter }) => {
  const handleNameChange = (event) => {
    setName(event.target.value);

    console.log('Name:', event.target.value);
  }

  return (
    <form>
      <section className="inputName">
        <p>What is your name?</p>
        <input type="text" onChange={handleNameChange} value={name} counter={counter} aria-labelledby="name-label" arial-label="Write your name here and then press button further down" />
      </section>
    </form>
  );
}
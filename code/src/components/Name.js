import React from 'react';

export const Name = ({ name, setName, counter }) => {
  const handleNameChange = (event) => {
    setName(event.target.value);

    console.log('Name:', event.target.value);
  }

  return (
    <div className="name-container">
      <p>What is your name?</p>
      <form>
        <section className="inputName">
          <input className="inputClass" type="text" onChange={handleNameChange} value={name} counter={counter} aria-labelledby="name-label" arial-label="Write your name here and then press button further down" />
        </section>
      </form>
    </div>
  );
}
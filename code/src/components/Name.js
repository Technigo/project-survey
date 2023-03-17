import React from 'react';

export const Name = ({ name, setName }) => {
  const handleNameChange = (event) => {
    setName(event.target.value);
  }


  return (




    <div className="name-box">

      <form onSubmit={(event) => event.preventDefault()}>

        <h2> How royal are you?</h2>
        <p> What is your name?</p>

        <input type="text" value={name} onChange={handleNameChange} />

      </form>

    </div>
  );

}
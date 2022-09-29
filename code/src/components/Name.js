import React from 'react';

const Name = ({ name, setName }) => {
  const onStepChange = (event) => {
    setName(event.target.value);
  }
  return (
    <div className="container">
      <h1 className="homeText"> Icebreaker meeting environment survey</h1>
      <p className="question">What is your name?</p>
      <p className="text">(You can answer the questions anonymously, but I know you anyway!😈)</p>
      <input className="inputBox" type="text" value={name} onChange={onStepChange} />
    </div>
  );
}

export default Name;

/* <button className="startButton" type="submit" onClick={onStepChange}>Start here!</button> */
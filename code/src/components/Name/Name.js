import React from 'react';
import './name.css';
import Warrior from '../../images/Warrior_Idle_1.png'

export const Name = ({ name, setName, handleStepIncrease }) => {
  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  return (
    <div className="name-container">
      <h1>Story Time</h1>
      <h2>Create your very own silly story.</h2>
      <div className="image-container-name">
        <img src={Warrior} alt="warrior" />
      </div>
      <p>What is your name, traveller?</p>
      <input type="text" value={name} onChange={handleNameChange} />
      <div>
        <button className="step-btn" type="button" onClick={handleStepIncrease}>Next</button>
      </div>
    </div>
  )
}
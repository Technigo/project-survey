import React from 'react';
import './name.css';
import Warrior from '../../images/Warrior_Idle_1.png'

export const Name = ({ name, setName, handleStepIncrease }) => {
  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && name !== '') {
      handleStepIncrease();
    }
  }

  return (
    <div className="name-container">
      <h1>Story Time</h1>
      <h2>Create your very own silly story.</h2>
      <div className="image-container-name">
        <img src={Warrior} alt="warrior" />
      </div>
      <p>What is your name, traveller?</p>
      <form>
        <input type="text" value={name} onChange={handleNameChange} onKeyDown={handleKeyDown} />
      </form>
      <div className="container-step-btn">
        <button
          className="step-btn"
          type="button"
          onClick={handleStepIncrease}
          disabled={name === ''}> Next
        </button>
      </div>
    </div>
  )
}
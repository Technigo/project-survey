import React from 'react';
import './name.css';
import Warrior from '../../images/Warrior_Idle_1.png'
import logo from '../../images/logo.png'

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
      <div className="logo-container-name">
        <img src={logo} alt="Story Time logo" />
      </div>
      <h1>Create your very own silly story by answering silly questions.</h1>
      <div className="image-container-name">
        <img src={Warrior} alt="warrior" />
      </div>
      <p className="question-text">What is your name, traveller?</p>
      <form>
        <input type="text" value={name} onChange={handleNameChange} onKeyDown={handleKeyDown} />
      </form>
      <div className="container-step-btn">
        <button
          className="step-btn"
          type="button"
          onClick={handleStepIncrease}
          disabled={name === ''}> Create story!
        </button>
      </div>
    </div>
  )
}
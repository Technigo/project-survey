import React from 'react';
import { FaLaptop } from '@react-icons/all-files/fa/FaLaptop';
import { AiFillClockCircle } from '@react-icons/all-files/ai/AiFillClockCircle';
import StartButton from './Button'

export const Header = ({ counter, setCounter }) => {
  return (
    <section className="header">
      <FaLaptop className="header-icon" />
      <h1 className="question">Work from home survey</h1>
      <p>How are you coping?</p>
      <StartButton counter={counter} setCounter={setCounter} name="Start" />
      <div className="btn-subtitle">
        <AiFillClockCircle className="clock-icon" />
        <p>Takes 2 minutes</p>
      </div>

    </section>

  );
}
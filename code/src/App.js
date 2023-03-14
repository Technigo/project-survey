/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';

import { Logo } from './components/Logo'
import { Role } from './components/Role'

export const App = () => {
  const [step, setStep] = useState(1)
  const [role, setRole] = useState('')
  const [rate, setRate] = useState('')
  const [recommend, setRecommend] = useState('')

  const handleStepIncrease = () => {
    setStep(step + 1)
  }
  return (
    <div>
      <Logo />
      <div className="topHeader">
        <h1>Thanks for visiting!</h1>
        <h1>I'd love to know a bit more about your experience of my performance.</h1>
      </div>
      <button className="startBtn" type="button">Give Feedback</button>
      <Role />
    </div>
  );
}

import React, { useState } from 'react'
import { Summary } from "./summary";
import { Form } from "./form";
import './app.css';

export const App = () => {
  const [feeling, setFeeling] = useState("")
  const [activity, setActivity] = useState("")
  const [sleep, setSleep] = useState("")
  const [showSummary, setShowSummary] = useState(false)

  const handleSubmit = event => {
    event.preventDefault();
    setShowSummary(true);
  }

  return (
    <div>
      <header className="header">
        <h1>Daily Check-In</h1>
      </header>
      <div className="form-container">
        {showSummary
          ? <Summary feeling={feeling} sleep={sleep} activity={activity} />
          : <Form {...{ feeling, setFeeling, activity, setActivity, sleep, setSleep, handleSubmit }} />
        }
      </div>
    </div>
  ); 
}

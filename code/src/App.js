import React, { useState } from "react";
import "./styles.css";
import { Summary } from "./Summary";

export const App = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [showSummary, setShowSummary] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowSummary(true);
  };
  return (
    <div className="App">
      <h1>Hey hey!</h1>


{/* Exempel 2, showSummary ? something : something else, såkallad  if/else a turnery operator */}

      {/* we have this onSubmit=event handelsubmit=function 
      {!showSummary && ( innebär att inte true vise detta eller detta*/}
{!showSummary && (
      <form onSubmit={handleSubmit}>
        <label className="name-box">
          What is your name?
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </label>
        <label className="password-box">
          What is your password?
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </label>
        <label className="age-box">
          What is your age?
          <input
            type="age"
            value={age}
            onChange={(event) => setAge(event.target.value)}
            required
          />
        </label>
        <button type="Submit">Submit</button>
      </form>
)}
      {/* showSummary samma som === true */}
      
      {showSummary && <Summary name={name} />}
    </div>
  );
};

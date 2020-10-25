const validateEmail = (email) => {
  const isValidLength = email.length > 6;
  const isValidEmail = /\S+@\S+\.\S+/.test(email);
  const isValid = isValidLength && isValidEmail;
  let msg = null;
  if (!isValid) {
    msg = "Email address is invalid";
  }
  return {
    isValid,
    msg,
  };
};

import React, { useState } from "react";
import "./styles.css";

const styles = ["Kickboxing", "MMA", "Wrestling", "BJJ", "Boxing"];

export default function App() {
  const [whichPlanet, setWhichPlanet] = useState("");

  return (
    <div className="App">
      <form>
        {styles.map((style) => (
          <label key={style} className="radio-btn" tabIndex="0">
            <input
              type="radio"
              name="radio"
              value={style}
              onChange={(event) => setTraining(event.target.value)}
              checked={training === style}
              id={style}
              className="radio"
              required
            />

            {style}
          </label>
        ))}
      </form>
    </div>
  );
}

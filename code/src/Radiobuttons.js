import React, { useState } from "react";
import './Radiobuttons.css'

export const Radiobuttons = () => {
  const [ageGroup, setAgeGroup] = useState("");

  return (
    
    <form>
      <label>Whats your age?</label>
      <label class="container">18-30
        <input
          type="radio"
          name="light"
          value="18-30"
          onChange={event => setAgeGroup(event.target.value)}
          checked={ageGroup === "18-30"}
        />
        <span class="checkmark"></span>
      </label>
      <label class="container">31-40
      <input
          type="radio"
          name="light"
          value="31-40"
          onChange={event => setAgeGroup(event.target.value)}
          checked={ageGroup === "31-40"}
        />
        <span class="checkmark"></span>
        
      </label>
      <label class="container">41+
        <input
          type="radio"
          name="light"
          value="41+"
          onChange={event => setAgeGroup(event.target.value)}
          checked={ageGroup === "41+"}
        />
        <span class="checkmark"></span>
      </label>
    </form>
  );
};
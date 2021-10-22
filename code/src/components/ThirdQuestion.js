import React, { useState } from 'react'

//This form has a radio-button 
const ThirdQuestion = ({ onStepChange, temp, onTempChange }) => {
    return (
      <form className="section">
        <h2>What outdoor temperature matches your favorite season? (celcius)</h2>
        
        <label>
          <input   
            id="-25-0"   
            type="radio" 
            value="-25-0" 
            onChange={onTempChange}
            checked={temp === "-25-0"} 
          />
          <span role="img" aria-label="winter">🌨️</span>
        (-25-0)</label>
        <label>
            <input   
              id="1-10"
              type="radio" 
              value="1-10" 
              onChange={onTempChange}
              checked={temp === "1-10"} 
            />
            <span role="img" aria-label="autumn">🍂</span>
          (1-10)</label>
        <label>
            <input   
              id="10-20"  
              type="radio" 
              value="10-20" 
              onChange={onTempChange}
              checked={temp === "10-20"} 
            />
          <span role="img" aria-label="spring">🌻</span>
          (10-20)</label>
            <label>
            <input   
              id="20-30"
              type="radio" 
              value="20-30" 
              onChange={onTempChange}
              checked={temp === "20-30"} 
            />
            <span role="img" aria-label="summer">🌞</span>
          (20-30)</label>
        <button className="btn" onClick = {onStepChange}>Go to my summary! </button>
      </form>
    );   
};

export default ThirdQuestion;
import React, { useState } from 'react'

//This form has a radio-button 
const ThirdQuestion = () => {
    const [temp, setTemp] = useState('')
    return (
      <form>
        <label htmlFor="nameInput">What outdoor temperature matches your favorite season? (celcius)</label>
            <input  
              type="radio" 
              value="-25-0" 
              checked={temp === "-25-0"} 
            />
            <input  
              type="radio" 
              value="1-10" 
              checked={temp === "1-10"} 
            />
            <input  
              type="radio" 
              value="10-20" 
              checked={temp === "10-20"} 
            />
            <input  
              type="radio" 
              value="20-30" 
              checked={temp === "20-30"} 
            />
        <button onClick = {onStepChange}>Go to my summary!: </button>
      </form>
    );   
};

export default ThirdQuestion;
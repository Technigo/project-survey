import React, { useState } from 'react'

export const Question3 = () => {
    const [riding, setRiding]= useState()
    const animals = ["kangaroo", "giraff", "hippo"]
    return (
      <form>
        <h1>If you lost the ability to walk and had 
          to to ride around on an animal for 
          the rest of your life. Which one would you choose?</h1>
        
        {animals.map(animal => (
          <label key={animals}>
            <input
            type="radio"
            value={animal}
            onChange={event => setRiding(event.target.value)}
            checked= {riding === animal}
            />
            {animal}
          </label>
        ))}
        </form>
        
      )
    }
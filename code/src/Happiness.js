import React from 'react'

export const Happiness = (props) => {
  return (
    <div className="happiness">
        <label>
            <input
              type="radio"
              value="1"
              onChange={() => props.setHappiness(1)}
              checked={props.happiness === 1} />

<span role="img" aria-label="One star">
         🌟 
          </span>
        </label>
           
        <label>
          <input 
          type="radio" 
          value="2" 
          onChange={() => props.setHappiness(2)}
          checked={props.happiness === 2} />
          
          <span role="img" aria-label="Two stars">
          🌟 
          </span>
        </label>

        <label>
          <input 
          type="radio" 
          value="3" 
          onChange={() => props.setHappiness(3)}
          checked={props.happiness === 3} />
          
          <span role="img" aria-label="Three stars">
          🌟 
          </span>
        </label>

        <label>
          <input 
          type="radio" 
          value="4" 
          onChange={() => props.setHappiness(4)}
          checked={props.happiness === 4} />
          
          <span role="img" aria-label="four stars">
           🌟
          </span>
        </label>

        <label>
          <input 
          type="radio" 
          value="5" 
          onChange={() => props.setHappiness(5)}
          checked={props.happiness === 5} />
          
          <span role="img" aria-label="Five stars">
           🌟 
          </span>
        </label>

      </div>
    )
}
import React from 'react'

export const Happiness = (props) => {
  return (
    <div className="happiness">
        <label>
            <input
              type="radio"
              value="star1"
              onChange={() => props.setHappiness('star1')}
              checked={props.happiness === 'star1'} />

<span role="img" aria-label="Happy face">
         🌟 
          </span>
        </label>
           
        <label>
          <input 
          type="radio" 
          value="star2" 
          onChange={() => props.setHappiness('star2')}
          checked={props.happiness === 'star2'} />
          
          <span role="img" aria-label="Sad-face">
          🌟 
          </span>
        </label>

        <label>
          <input 
          type="radio" 
          value="star3" 
          onChange={() => props.setHappiness('star3')}
          checked={props.happiness === 'star3'} />
          
          <span role="img" aria-label="dunno-face">
          🌟 
          </span>
        </label>

        <label>
          <input 
          type="radio" 
          value="star4" 
          onChange={() => props.setHappiness('star4')}
          checked={props.happiness === 'star4'} />
          
          <span role="img" aria-label="dunno-face">
           🌟
          </span>
        </label>

        <label>
          <input 
          type="radio" 
          value="star5" 
          onChange={() => props.setHappiness('star5')}
          checked={props.happiness === 'star5'} />
          
          <span role="img" aria-label="dunno-face">
           🌟 
          </span>
        </label>

      </div>
    )
}
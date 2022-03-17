import React, { useState } from 'react';

const Radio = (props) => {

    const [alternatives, setAlternatives] = useState();
    
  return (
    <div>
      {props.question}
      {props.alternatives.map((alternative) => (
        <label key={alternative}>
          <input
          type="radio"
          value={alternative}
          onChange={(event) => setAlternatives(event.target.value)}
          checked={alternatives === alternative} 
          />
          {alternative}
        </label>
      ))}
    </div>
  )
}

export default Radio;
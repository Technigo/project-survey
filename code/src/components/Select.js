import React, {useState} from 'react'
import './select.css'

export const Select = () => {

const [rating, setRating] = useState("");

  return (
    <form onSubmit={event => event.preventDefault()}>
     
      <select 
      onChange={event => setRating(event.target.value) }
      value={rating}
      required
      >
        <option value="">Today is a good day!</option>
        <option value="dont-agree">Dont agree</option>
        <option value="not-sure">Not sure</option>
        <option value="totaly-agree">Totaly agree</option>
      </select>
    
    </form>
  );
};




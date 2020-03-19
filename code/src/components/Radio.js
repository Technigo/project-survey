import React from "react";
import './radio.css'
 
export const Radio = props => {
  let { myChoice, setMyChoice } = props;
  const myChoices = [
    'Look at the details',
    'Look at the big picture'
  ] 

  return (
    
    <form onSubmit={event => event.preventDefault()}>
      Preference:
      {myChoices.map((choice) => (
      <label key={choice}>
        <input
          type="radio"
          value={choice}
          onChange={event => setMyChoice(event.target.value)}
          checked={myChoice === choice}
        />
        {choice}
      </label>
      ))}
    </form>
  )
}

/*

// LONG RADIO ALTERNATIVE 
export const Radio = () => {

  const [ myChoice, setMyChoice] = useState();

  return (
    <form>
      <label>
        <input
        type="radio"
        value='I like to look at the details'
        onChange={event => setMyChoice(event.target.value)}
        checked={myChoice === 'I like to look at the details'}
        />
        I like to look at the details
      </label>

      <label>
        <input
        type="radio"
        value='I like to look at the big picture'
        onChange={event => setMyChoice(event.target.value)}
        checked={myChoice === 'I like to look at the big picture'}
        />
        I like to look at the big picture
      </label>
    </form>
  )
} 

*/
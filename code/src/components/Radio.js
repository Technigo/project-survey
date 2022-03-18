import React from 'react';

//const Radio = (props) => {

const Radio = ({question, onRadioChange}) => {


  //const [alternatives, setAlternatives] = useState();
    
  return (
    <div>
      {question.question}
      {question.alternatives.map((alternative) => (
        <label key={alternative} htmlFor={alternative}>
          <input
          id={alternative}
          type="radio"
          value={alternative}
          onChange={onRadioChange}
          // name måste vara satt till samma värde för alla radio-inputs.
          // därför använver vi question.number.
          // sen la jag till "radio" innan bara för att jag är osäker om en siffra är ett giltligt name i html
          name={"radio" + question.number}
          />
          {alternative}
        </label>
      ))}
    </div>
  )
}

export default Radio;
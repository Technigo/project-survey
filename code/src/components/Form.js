import React from 'react';

import TextInputName from './TextInputName'
import Selector from './Selector';
import Range from './Range'
import RadioButton from './RadioButtons';

const Form = (props) => {
  return (
    <form className="form-wrapper">
      <h2 className="form-title">{props.title}</h2>
      <TextInputName label="Name" />
      <Selector array={props.catBreeds} label="Choose a breed" />
  
        <h3>Question 1</h3>
        <div className="radio-buttons-wrapper">
          <RadioButton
            buttonsValues={props.radioButtonsValues}
            answer={props.answer}
            setAnswer={props.setAnswer}
          />
        </div>
      <Range question="How do you feel about the survey?" />
    </form>
  )
}
export default Form


// {props.radioButtonsQuestions.map(question => {
//   return (
//     <div className="radio-question-button" key={question}>
//       <h3>{question}</h3>
//       <div className="radio-buttons-wrapper">
//         <RadioButton
//           buttonsValues={props.radioButtonsValues}
//           questionName={question}
//           answer={props.answer}
//           setAnswer={props.setAnswer}
//         />
//       </div>
//     </div>
//     )
//   })
// }
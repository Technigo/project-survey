import React, {useState} from 'react';

import TextInputName from './TextInputName'
import Selector from './Selector';
import Range from './Range'
import RadioButton from './RadioButtons';



const Form = (props) => {
  const [mood, setMood] = useState("");
  const [food, setFood] = useState("")
  const [summaryHidden, setSummaryHidden] = useState(true)
  const [section, setSection] = useState('firstQuestion')
  
  const isFormFilled = () => {
    if(mood ==="") {
      return true
    }
    if (food === "") {
      return true
    }
    return false
  }
  
  const handleSubmit = (event) =>{
    event.preventDefault();
    setSummaryHidden(false)
  }


  if (summaryHidden === true) {
  return (
      
      <form 
      className="form-wrapper"
      onSubmit={handleSubmit}
      > 
       
      <h2 className="form-title">{props.title}</h2>
      {/* <TextInputName label="Name" />
      <Selector array={props.catBreeds} label="Choose a breed" /> */}
      { section ==="firstQuestion" && (
        <div>
        <h3>Question 1</h3>
        <div className="radio-buttons-wrapper">
          <RadioButton
            buttonsValues={props.radioButtonsValues}
            answer={food}
            name="question1"
            setAnswer={setFood}
          />
        </div>
        <button type="button" value="secondQuestion" onClick={(event)=>setSection(event.target.value)}> Nex question </button>
        </div>)
      }
      {section ==="secondQuestion" && (
        <div>
          <h3>Question 2</h3>
          <div className="radio-buttons-wrapper">
            <RadioButton
              buttonsValues={props.radioButtonsValues}
              answer={mood}
              name="question2"
              setAnswer={setMood}
            />
          </div>
        
      {/* <Range question="How do you feel about the survey?" /> */}
      
      <button 
        disabled={isFormFilled()}
        type="submit"
       >Submit</button>
      </div>
       )}
    </form>
  )
} else {
  return (
    <section>
      <p>{mood}</p>
      <p> {food}</p>
    </section>
  )
}

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
import React, {useState} from 'react';

import data from '../data.json'

import TextInputName from './TextInputName'
import Selector from './Selector';
import Range from './Range'
import RadioButton from './RadioButtons';



const Form = (props) => {
  const [needVacation, setNeedVacation] = useState("");
  const [country, setCountry] = useState("");
  const [vacationType, setVacationType] = useState("");
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState(""); 
  const [mood, setMood] = useState("");
  const [food, setFood] = useState("")
  const [summaryHidden, setSummaryHidden] = useState(true)
  const [section, setSection] = useState('firstQuestion')
  
  const questions = data.QuestionsNumberArray

//Function checking whether the form is filled
  const isFormFilled = () => {
    if(mood === "") {
      return true
    }
    if (food === "") {
      return true
    }
    return false
  }
//Funcion that handles submit form 
  const handleSubmit = (event) =>{
    event.preventDefault();
    setSummaryHidden(false)
  }
//conditional rendering depending on whether summary is hidden or not
  if (summaryHidden === true) {
  return (
      <form  className="form-wrapper" onSubmit={handleSubmit}>  
      
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

/* <TextInputName label="Name" />
      <Selector array={props.catBreeds} label="Choose a breed" /> */
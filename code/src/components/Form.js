import React, { useState } from 'react';

import data from '../data.json'

import WelcomeSection from './WelcomeSection'
import TextInputName from './TextInputName'
import CountrySelector from './CounrtySelector';
import NeedVacationRange from './NeedVactionRange'
import VacationTypeRadioButton from './VacationTypeRadioButtons';



const Form = (props) => {
  const questions = data.QuestionsNumberArray
  const countries = data.countries
  const [needVacation, setNeedVacation] = useState("");
  const [country, setCountry] = useState("");
  const [vacationType, setVacationType] = useState("");
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mood, setMood] = useState("");
  const [summaryHidden, setSummaryHidden] = useState(true)
  const [section, setSection] = useState(questions[0])



  //Function checking whether the form is filled
  const isFormFilled = () => {
    if (needVacation === "") {
      return true
    }
    if (mood === "") {
      return true
    }
    return false
  }
  //Funcion that handles submit form 
  const handleSubmit = (event) => {
    event.preventDefault();
    setSummaryHidden(false)
  }
  //conditional rendering depending on whether summary is hidden or not
  if (summaryHidden === true) {
    return (
      <form className="form-wrapper" onSubmit={handleSubmit}>
        { section === questions[0] && (
          <WelcomeSection 
            section={section} 
            setSection={setSection} 
            question={questions[1]} />
        )}

        { section === questions[1] && (
          <NeedVacationRange
            setSection={setSection}
            question={questions[2]}
            needVacation={needVacation}
            setNeedVacation={setNeedVacation}
          />
        )}

        {section === questions[2] && (
          
            <CountrySelector
              setSection={setSection}
              question={questions[3]}
              country ={country}
              setCountry={setCountry}
              countries={countries}
            />
          )}

          {section === questions[3] &&(
            <div>
            <h3>Question 2</h3>
            <div className="radio-buttons-wrapper">
              <VacationTypeRadioButton
                buttonsValues={props.radioButtonsValues}
                answer={mood}
                name="question2"
                setAnswer={setMood}
              />
            </div>

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
        <p>Need vacation:{needVacation} out of 10</p>
        <p>You want to go to: {country}</p>
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
import React, { useState } from 'react';

import data from '../data.json'

import WelcomeSection from './WelcomeSection'
import TextInputName from './TextInputName'
import CountrySelector from './CounrtySelector';
import NeedVacationRange from './NeedVactionRange'
import VacationTypeRadioButton from './VacationTypeRadioButtons';
import ChooseDate from './ChooseDate';



const Form = (props) => {
  const questions = data.QuestionsNumberArray
  const countries = data.countries
  const [needVacation, setNeedVacation] = useState("");
  const [country, setCountry] = useState("");
  const [vacationType, setVacationType] = useState("");
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [summaryHidden, setSummaryHidden] = useState(true)
  const [section, setSection] = useState(questions[0])
  const [progress, setProgress] = useState(0)



  //Function checking whether the form is filled
  const isFormFilled = () => {
    if (needVacation === "") {
      return true
    }
    if (country === "") {
      return true
    }
    if (vacationType === "") {
      return true
    }
    if (date === "") {
      return true
    }
    if (name ===""){
      return true
    }
    if (email === ""){
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
            question={questions[1]}
            progress={progress}
            setProgress={setProgress} 
            />
        )}

        { section === questions[1] && (
          <NeedVacationRange
            setSection={setSection}
            question={questions[2]}
            needVacation={needVacation}
            setNeedVacation={setNeedVacation}
            progress={progress}
            setProgress={setProgress}
          />
        )}

        {section === questions[2] && (
          <CountrySelector
            setSection={setSection}
            question={questions[3]}
            country ={country}
            setCountry={setCountry}
            countries={countries}
            progress={progress}
            setProgress={setProgress}
          />
          )}

          {section === questions[3] &&(
            <VacationTypeRadioButton
              setSection={setSection}  
              vacationTypes={data.vacationTypes}
              vacationType={vacationType}
              name="question3"
              setVacationType={setVacationType}
              question={questions[4]}
              progress={progress}
              setProgress= {setProgress}
            />
          )}
          {section === questions[4] &&(
            <ChooseDate 
              date={date}
              setDate={setDate}
              question={questions[5]}
              progress={progress}
              setProgress= {setProgress}
              setSection={setSection}
            />
          )}
          {section === questions[5] &&(
          <div>
            <TextInputName 
              name={name}
              setName={setName}
              email ={email}
              setEmail={setEmail}
            />
            <button disabled={isFormFilled()} type="submit">
              Submit
            </button>
          </div>
        )}
        <p>Here is progress: {progress}</p>
      </form>
    )
  } else {
    return (
      <section>
        <p>Need vacation:{needVacation} out of 10</p>
        <p>You want to go to: {country}</p>
        <p>Type of activities: {vacationType}</p>
        <p>Here is the date you picked {date}</p>
        <p>Here is your email:{email}</p>
        <p> Here is your name:{name}</p>
      </section>
    )
  }

}
export default Form

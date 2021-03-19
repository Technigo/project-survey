import React, { useState } from 'react';

import data from '../data.json'

import WelcomeSection from './WelcomeSection'
import TextInputName from './TextInputName'
import CountrySelector from './CounrtySelector';
import NeedVacationRange from './NeedVactionRange'
import VacationTypeRadioButton from './VacationTypeRadioButtons';
import ChooseDate from './ChooseDate';
import Summary from './Summary'
import ProgressBar from './ProgressBar'



const Form = () => {
  const questions = data.QuestionsNumberArray
  const countries = data.countries
  const [needVacation, setNeedVacation] = useState("");
  const [country, setCountry] = useState("");
  const [vacationType, setVacationType] = useState("");
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [summaryHidden, setSummaryHidden] = useState(true);
  const [progress, setProgress] = useState(0);
  const [question, setQuestion] = useState(questions[progress]);
  

  //Function checking whether the form is filled
  const isFormFilled = () => {
    if (name === "") {
      return true
    }
    if (email === "") {
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
        { question === questions[0] && (
          <WelcomeSection
            setQuestion={setQuestion}
            progress={progress}
            setProgress={setProgress}
          />
        )}

        { question === questions[1] && (
          <NeedVacationRange
            setQuestion={setQuestion}
            needVacation={needVacation}
            setNeedVacation={setNeedVacation}
            progress={progress}
            setProgress={setProgress}
          />
        )}

        {question === questions[2] && (
          <CountrySelector
            setQuestion={setQuestion}
            country={country}
            setCountry={setCountry}
            countries={countries}
            progress={progress}
            setProgress={setProgress}
          />
        )}

        {question === questions[3] && (
          <VacationTypeRadioButton
            setQuestion={setQuestion}
            vacationTypes={data.vacationTypes}
            vacationType={vacationType}
            name={questions[3]}
            setVacationType={setVacationType}
            progress={progress}
            setProgress={setProgress}
          />
        )}
        {question === questions[4] && (
          <ChooseDate
            date={date}
            setDate={setDate}
            progress={progress}
            setProgress={setProgress}
            setQuestion={setQuestion}
          />
        )}
        {question === questions[5] && (
          <div className="question-card">
            <TextInputName
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
            />
            <button disabled={isFormFilled()} type="submit" className="start-next-button">
              Submit
            </button>
          </div>
        )}
        <div>
          <ProgressBar progress={progress} />
        </div>
      </form>
    )
  } else {
    return (
      <Summary
        name={name}
        needVacation={needVacation}
        country={country}
        vacationType={vacationType}
        date={date}
        email={email}
      />
    )
  }
}
export default Form

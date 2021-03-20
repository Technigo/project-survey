import React, { useState } from 'react';

import data from '../data.json';

import WelcomeSection from './WelcomeSection';
import CountrySelector from './CounrtySelector';
import NeedVacationRange from './NeedVactionRange'
import VacationTypeRadioButton from './VacationTypeRadioButtons';
import ChooseDate from './ChooseDate';
import Summary from './Summary';
import ProgressBar from './ProgressBar';
import SubmitButton from './SubmitButton';
import Checkboxes from './Checkboxes'
import PersonalInformation from './PersonalInformation';



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
  const [checkboxGroup, setCheckboxGroup] = useState([])
  

  //Function checking whether the form is filled
  const isFormFilled = () => {
    if (name === "") {
      return true
    }
    if (email === "") {
      return true
    }
    if (!(checkboxGroup.includes("agreeTerms"))) {
      return true
    }
    return false
  }
  //Funcion that handles submit form 
  const handleSubmit = (event) => {
    event.preventDefault();
    const regex = /^[a-zA-Z ]+$/
    if(!(regex.test(name))) {
      alert("A name cannot contain numbers")
    } else {setSummaryHidden(false)}
    
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
            <PersonalInformation
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
            />
            <Checkboxes
             checkboxGroup={checkboxGroup}
             setCheckboxGroup={setCheckboxGroup}
             />
            <SubmitButton isFormFilled={isFormFilled}/>
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
        checkboxGroup={checkboxGroup}
      />
    )
  }
}
export default Form

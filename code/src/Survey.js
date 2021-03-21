import React from 'react'
import NameQuestion from './NameQuestion'
import ColorQuestion from './ColorQuestion'
import EmailQuestion from './EmailQuestion'
import TelephoneQuestion from './TelephoneQuestion'
import PersonalityQuestion from './PersonalityQuestion'
import OccupationQuestion from './OccupationQuestion'
import Submit from './Submit'

const Survey = (props) => {
  return (
    <>
    <h1 className="h1">My Business Card Generator</h1>
    <form className="survey" onSubmit={(event) => event.preventDefault()}>
      <div className="contact-info-inputs">
        <NameQuestion 
          name={props.name} 
          setName={props.setName}
          />
        <OccupationQuestion 
          occupation = {props.occupation} 
          setOccupation={props.setOccupation}
          />
        <EmailQuestion 
          email = {props.email}
          setEmail={props.setEmail}
          />
        <TelephoneQuestion
          telephone= {props.telephone}
          setTelephone={props.setTelephone}
          />
      </div>
      <ColorQuestion
        color={props.color}
        setColor={props.setColor}
        />
      <PersonalityQuestion
        personality={props.personality}
        setPersonality={props.setPersonality}
      />  
      <Submit
        setSubmitted={props.setSubmitted}
        isSurveyComplete={props.isSurveyComplete}
      /> 
    </form>
    </>
  )
}

export default Survey;
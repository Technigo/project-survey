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
    <form className="survey" onSubmit={(event) => event.preventDefault()}>
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
  )
}

export default Survey;
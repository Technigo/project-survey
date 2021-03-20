import React from 'react'
import SurveyButtons from './SurveyButtons'

const Summary = ({ step, setStep, name, animal, accessory, activity, ratherNot }) => {
  return (
    <>
      <p className="summary-text">You are the <span className="span-bold">{animal} </span> <span className="span-bold">{name} </span>
        that loves wearing <span className="span-bold">{accessory} </span>
        and prefers to <span className="span-bold">{activity} </span>
        rather than <span className="span-bold">{ratherNot} </span>
      </p>
      <SurveyButtons
        step={step}
        setStep={setStep}
      />
    </>
  )
}
export default Summary
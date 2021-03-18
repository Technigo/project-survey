import React from 'react'
import SurveyButtons from './SurveyButtons'

const Summary = (props) => {
  return (
    <>
      {props.step === 6 && (
        <>
            <p className="summary-text">You are the <span className="span-bold">{props.animal} </span> <span className="span-bold">{props.name} </span>
              that loves wearing <span className="span-bold">{props.accessory} </span>
              and prefers to <span className="span-bold">{props.activity} </span>
              rather than <span className="span-bold">{props.ratherNot} </span>
            </p>
          <SurveyButtons
            step={props.step}
            setStep={props.setStep}
          />
      </>
      )}
      
    </>
  )
}
export default Summary
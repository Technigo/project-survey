import React from 'react'
import 'components/formSummary.css'
import { Button } from 'components/Button'

export const FormSummary = ({ state, decrementStep, handleRestart, step }) => {
  return (
    <div className='form-summary'>
      <h3>Survey Summary</h3>
      {state.answers.map(answer => {
        return (
          <>
            <h4>{answer.title}</h4>
            {Object.keys(answer).map(key => {
              if (answer[key].label) {
                return (
                  <div className='form-summary-section'>
                    <p className='form-summary-label'>{answer[key].label}:</p>
                    <p className='form-summary-answer'>{answer[key].value}</p>
                  </div>
                )
              }
              return null
            })}
            <div className='button-container'>
              {step === 'end' && <Button text={''} type={'up'} onClick={decrementStep} />}
              {step === 'end' && <Button text={'Reset'} onClick={handleRestart} />}
            </div>
          </>
        )
      })}
    </div>
  )
}

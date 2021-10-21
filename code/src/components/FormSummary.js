import React from 'react'
import 'components/formSummary.css'

export const FormSummary = props => {
  const { state } = props

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
          </>
        )
      })}
    </div>
  )
}

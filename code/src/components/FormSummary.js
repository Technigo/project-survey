import React from 'react'

export const FormSummary = props => {
  const { state } = props

  return (
    <div>
      <h3>Survey Summary</h3>
      {state.answers.map(answer => {
        return (
          <>
            <h4>{answer.title}</h4>
            {Object.keys(answer).map(key => {
              if (answer[key].label) {
                return (
                  <>
                    <p>{answer[key].label}</p>
                    <p>{answer[key].value}</p>
                  </>
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

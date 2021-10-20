import React from 'react'

export const FormSummary = props => {
  const { state, data } = props
  const { answers } = state
  return (
    <div>
      <h3>Survey Summary</h3>
      {state.answers.map(answer => {
        // console.log(state.answers[question.title]) (key === 'value' && <p>{answer[key]}</p>)
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
            })}
          </>
        )
      })}

      {/* <p>The summary: {JSON.stringify(state)}</p> */}
    </div>
  )
}

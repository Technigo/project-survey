import React from 'react'

export const FormSummary = props => {
  const { state, data } = props
  return (
    <div>
      <h3>Survey Summary</h3>
      {data.questions.map(question => {
        console.log(state.answers[question.title])
        return (
          <>
            <h4>{question.title}</h4>
            <p>asdad</p>
          </>
        )
      })}

      <p>The summary: {JSON.stringify(state)}</p>
    </div>
  )
}

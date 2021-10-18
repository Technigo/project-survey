import React from 'react'

export const FormSummary = props => {
  const { answer } = props.state
  // const answer = true

  // console.log(props)
  return (
    <div>
      <h2>Survey Summary</h2>
      <p>The summary: {JSON.stringify(props.state)}</p>
    </div>
  )
}

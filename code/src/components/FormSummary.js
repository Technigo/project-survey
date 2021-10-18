import React from 'react'

export const FormSummary = props => {
  return (
    <div>
      <h2>Survey Summary</h2>
      <p>The summary: {JSON.stringify(props.state)}</p>
    </div>
  )
}

import React from 'react'

export const Results = ({ role, rate, reco, final }) => {
  return (
    <div>
      <h3>Results:</h3>
      <p>Your role is: {role}</p>
      <p>You rate my progress as: {rate}</p>
      <p>The likeliness that you would recommend me is: {reco}%</p>
      <p>Final comments: {final}</p>
    </div>
  )
}
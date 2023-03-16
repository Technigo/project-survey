import React from 'react';

export const SubmitScreen = ({ name, foxtype, date, payment, yesNews, satisfaction }) => {
  return (
    <div className="summarizebox">
      <h1>Thank you valued customer, you will hear from us shortly!</h1>
      <p>Your name is:</p>
      <h4>{name}</h4>
      <p>Your purchase:</p>
      <h4>{foxtype}</h4>
      <p>Date of purchase:</p>
      <h4>{date}</h4>
      <p>Choice of reimbursement:</p>
      <h4>{payment}</h4>
      <p>Opt in for future deals:</p>
      <h4>{yesNews ? 'Yes' : 'No'}</h4>
      <p>Satisfaction score:</p>
      <h4>{satisfaction}</h4>
    </div>
  )
}
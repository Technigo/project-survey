import React from 'react';
import SubmitButton from './SubmitButton';
import PreviousButton from './PreviousButton';

const Page7 = ({ name, foxtype, date, payment, yesNews, satisfaction, counter, setCounter }) => {
  return (
    <div className="summarizebox">
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
      <p>Are you satisfied with your answers?</p>
      <div className="button-container">
        <SubmitButton counter={counter} setCounter={setCounter} />
        <PreviousButton counter={counter} setCounter={setCounter} />
      </div>
    </div>
  )
}

export default Page7;
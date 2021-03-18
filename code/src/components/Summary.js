import React from 'react';
import './Summary.css'
const Summary = ({name, needVacation, country, vacationType, date, email }) => {
  return (
    <div className="summary-container">
      <h3 className="question-heading" >Thank you for finishing the survey, {name}!</h3>
      <p className="summary-text">Below are your answers</p>
      <ul className="answers-wrapper">
        {needVacation>=5 && (<li className="answer-text">You really need vacation ({needVacation} out of 10);</li>)}
        {needVacation<5 && (<li className="answer-text">You can wait with vacation and take time planning;</li>)} 
        <li className="answer-text">You would want to go to: {country};</li>
        <li className="answer-text">You prefer the following type of your vacation activity: {vacationType};</li>
        <li className="answer-text">You would want to start your vacation: {date}</li>
      </ul>
      <p className="summary-text"> We will get back to you with options for your vacation at <span className="email">{email}</span> as soon as possible!</p>   
    </div>
  )
}
export default Summary
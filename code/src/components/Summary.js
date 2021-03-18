import React from 'react';

const Summary = ({name, needVacation, country, vacationType, date, email }) => {
  return (
    <div className="summary-container">
      <p>Thank you very much {name}</p>
      <div>
        <p>Here are your answers</p>
        <ul>
          <li>You need vacation: {needVacation} out of 10;</li>
          <li>You would want to go to: {country};</li>
          <li>You would prefer to spend your vacation: {vacationType};</li>
          <li>You would want to start your vacation: {date}</li>
        </ul>
       <p> We will get back to you with options for your vacation to this {email} address as soon as possible!</p>   

      </div>
    </div>
  )
}
export default Summary
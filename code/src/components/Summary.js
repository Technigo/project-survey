import React from 'react'

const Summary = ({travelWay, rooms, city, food, email, onStepChange, onBackstepChange}) => {
   return (
        <section className="question-container">
            <h2>And you´re done!</h2>
            <div className='summary-answer'>
            <h3>We hope you had a great time on our event in <b>{city}!</b></h3>
            </div>
            <div className='reg-answers'>
            <p>Your registered answers:</p>
            <p>Traveled <b>{travelWay}</b></p>
            <p>Standard in our rooms: <b>{rooms}</b></p>
            <p>Standard in our restaurant: <b>{food}</b></p>
            </div>
            <div className='answer-change'>
            <p>Want to change any answers?</p>
            <p>If not, press Send!</p>
            </div>
            <div className="locationButtons">
        <button onClick={onBackstepChange}>Back</button>
        <button onClick={onStepChange}>Send!</button>
        </div>
        </section>
        
    )
}

export default Summary
import React from 'react'

const Summary = ({name, travelWay, rooms, city, food, email, onBackstepChange}) => {
   return (
        <section className="question-container">
            <h2>And you´re done!</h2>
            <p>We´ve registered that you attended our event in {city} and that
            you traveled {travelWay} to get there. You gave our rooms a {rooms} and the standard
            of our the restaurant a {food}.</p>

            <div className="">
                <label htmlFor='email'></label>
                <input
                id="email"
                type="e-mail"
                // onChange={onNameChange}
                // value={name}
                />
             <button disabled={email===""}>OK</button>
             <button onClick={onBackstepChange}>back</button>
             </div>
        </section>
        
    )
}

export default Summary
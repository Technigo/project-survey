import React from 'react'

const QuestionThreeReason = () => {
    return (
        <div>
           <p>What's the main reason you would like to travel for?</p>
              <label htmlFor="globe-trotter">I am a globe-trotter!</label>
              <input id="globe-trotter" type="radio" />
              <label htmlFor="break">I want to break before starting my new job!</label>
              <input id="break" type="radio" />
              <label htmlFor="abroad">I have never been abroad</label>
              <input id="abroad" type="radio" />
              <label htmlFor="exploration">I want to explore a new culture!</label>
              <input id="exploration" type="radio" />
              <label htmlFor="australia">I want to practice a second language</label>
              <input id="australia" type="radio" /> 
        </div>
    )
}

export default QuestionThreeReason

import React from 'react'

const QuestionFiveActivity = () => {
    return (
        <div>
          <p>What's the main activity you are looking forward to?</p>
            <label htmlFor="nature">Enjoy nature!</label>
            <input id="nature" type="radio" />
            <label htmlFor="gastronomy">Make a gastronomic tour</label>
            <input id="gastronomy" type="radio" />
            <label htmlFor="culture">Explore the cultural scene</label>
            <input id="culture" type="radio" />
            <label htmlFor="locals">I want to hang out with the locals!</label>
            <input id="locals" type="radio" />
            <label htmlFor="party">Party hard till sunrise!</label>
            <input id="party" type="radio" />  
        </div>
    )
}

export default QuestionFiveActivity

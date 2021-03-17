// import React, { useState } from 'react'
import React from 'react'

const QuestionTwo = ({ food, setFood }) => {

    const onFoodChange = (event) => {
        setFood(event.target.value)
    }

    return (
        <>
            <div>
                <h2>Second Question</h2>
                <p>What's your favorite food?</p>
             </div>
            <div>
                <label htmlFor="food"></label>
                <select id="food" value={food} onChange={onFoodChange}>
                    <option>Pizza</option>
                    <option>Pasta</option>
                    <option>Soup</option>
                    <option>Sallad</option>
                </select>
                <h3>Chosen food: {food}</h3>
            </div>
        </>
    )

}

export default QuestionTwo;
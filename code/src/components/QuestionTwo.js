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
                <select 
                    id="food"
                    value={food}
                    name="food"
                    onChange={onFoodChange}>
                    <option disabled></option>
                    <option>Pizza</option>
                    <option>Pasta</option>
                    <option>Soup</option>
                    <option>Sallad</option>
                </select>
                <p>Chosen food: {food}</p>
            </div>
        </>
    )

}

export default QuestionTwo;
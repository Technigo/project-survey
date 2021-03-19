// import React, { useState } from 'react'
import React from 'react'

const QuestionTwo = ({ food, setFood }) => {

    const onFoodChange = (event) => {
        setFood(event.target.value)
    }

    return (
        <>
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
            </div>
        </>
    )

}

export default QuestionTwo;
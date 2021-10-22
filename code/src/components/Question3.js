import React from "react"

const Question3 = ({ foodInput, onFoodInputChange, onStepChange }) => {

    return (
        <form className="form">
            <label htmlFor="foodInput">3. Favorite Christmas food or treat?</label>
            <input 
                id="foodInput" 
                type="text" 
                value={foodInput} 
                onChange={onFoodInputChange}
                placeholder="Type your answer here..."
            />

            <button onClick={onStepChange}>Next</button>
        </form>
    )
}

export default Question3
import React from "react"

const Question5 = ({ giftsInput, onGiftsInputChange, onStepChange }) => {

        return (
        <form className="form">
            <label htmlFor="giftsInput">5. Please rate your latest Christmas meal <br/>from 1 (Not good) to 5 (Superb):</label>
            <input type="range" id="gifts" name="gifts" min="0" max="100" value={giftsInput} onChange={onGiftsInputChange}/>


        </form>




export default Question5
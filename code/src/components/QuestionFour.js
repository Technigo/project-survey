import React, { useState } from "react";

const options = ['Definitely 😊', 'Might or might not', 'Definitely not']

const QuestionFour = ({ questionNum, loyalty, getLoyaltyRating }) => {

    return <>
        <p> <span>{questionNum}</span> How likely are you to use our service again?</p>

        {options.map (option => {
            
            return <label key={option}>
                <input 
                type='radio'
                value={option}
                checked = {loyalty === option}
                id={option}
                onChange={e => getLoyaltyRating(e.target.value)}
                />

                {option}
            </label>
        })}
    </>
}


export default QuestionFour;
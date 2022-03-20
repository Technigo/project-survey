import React from "react";

const options = ['Definitely 😊', 'Might or might not 🤔', 'Definitely not 😔'];

const QuestionFour = ({ questionNum, loyalty, getLoyaltyRating }) => {
 
    return <div className='question flex'>
        <p className="question-four-title"> {questionNum}. How likely are you to use our service again?</p>

        {options.map (option => {
            
            return <label htmlFor={option} className='radio' key={option}>
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
    </div>
}

export default QuestionFour;
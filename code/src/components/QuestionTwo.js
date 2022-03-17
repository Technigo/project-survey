import React from "react";


const QuestionTwo = ({ questionNum, rating, getRating, satisfactionRating, satisfaction, setSatisfaction }) => {

    setSatisfaction(satisfactionRating[rating])

   return <div className="question">
        <label htmlFor='range'><span>{questionNum}.</span>How happy are you with the cleanliness?</label>
        <input 
        id='range'
        type='range'
        min='0'
        max={satisfactionRating.length - 1}
        value={rating}
        onChange={e => getRating(e.target.value)} />
          
         <output className="output" htmlFor='rating'>{satisfaction}</output>
    
    </div>


}

export default QuestionTwo;
import React from "react";


const QuestionTwo = ({ questionNum, rating, getRating, satisfactionRating, satisfaction, setSatisfaction }) => {

    setSatisfaction(satisfactionRating[rating])

   return <>
        <p>{questionNum} How happy are you with the cleanliness?</p>
        <input 
        type='range'
        min='0'
        max={satisfactionRating.length - 1}
        value={rating}
        onChange={e => getRating(e.target.value)} />
          
         <p>{satisfaction}</p>
    
    </>


}

export default QuestionTwo;
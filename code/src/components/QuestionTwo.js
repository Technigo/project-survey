import React, { useState } from "react";

const options = ['Terrible 😞', 'Bad 🙁', 'Okay 🙂', 'Happy 😊', 'Very happy 😍'];


const QuestionTwo = ({ questionNum, rating, getRating }) => {

    const mapTh = (rating) => {
        return <p>{options[rating]}</p>
    }

   return <>
        <p>How happy are you?</p>
        <input 
        type='range'
        min='0'
        max={options.length - 1}
        value={rating}
        onChange={e => getRating(e.target.value)} />
        {mapTh(rating)}
    </>

    /*
    return <form>
        <p><span>{questionNum}</span> How happy are you with the cleanliness?</p>

         {options.map(option => {
             return <label key={option}>
                 <input 
                 type = 'radio'
                 value = {option}
                 checked = {rating === option}
                 onChange={e => {getRating(e.target.value)}}
                 />
                {option}
             </label>
         })}
    </form>
    */
}

export default QuestionTwo;
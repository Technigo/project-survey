import React from 'react';

const QuestionOptions = ({location, onLocationChange, onNextChange}) => {
    
    return (
        <div className="question-box">
            <h2>Question 2</h2>
            <form>
                <lable htmlFor='location'>Where do you want to move?</lable> 
                <select
                    onChange={(event) => onLocationChange(event.target.value)}
                    value={location}>
                    <option disabled>Select location:</option>
                    <option value='STHLM'>Stockholm</option>
                    <option value='BARCA'>Barcelona</option>
                    <option value='OSLO'>Oslo</option>
                </select>
                <button onClick={onNextChange}>
                    Next
                </button>
            </form>
        </div>
    )
}

export default QuestionOptions


// add value after option?
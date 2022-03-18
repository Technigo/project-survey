import React from 'react';

const QuestionOptions = ({location, onLocationChange, onNextChange}) => {
    
    return (
        <div className="question-box">
            <h2>Question 2</h2>
            <form>
                <label htmlFor='location'>Where in south of Stockholm do you want to move?</label> 
                <select
                    onChange={(event) => onLocationChange(event.target.value)}
                    value={location}>
                    <option value='You forgot to choose'>Pick an area</option>
                    <option value='Enskede'>Enskede</option>
                    <option value='Gullmarsplan-Årsta-Östberg'>Gullmarsplan-Årsta-Östberga</option>
                    <option value='Farsta-Sköndal'>Farsta-Sköndal</option>
                    <option value='Hammarbyhöjden-Skarpnäck'>Hammarbyhöjden-Skarpnäck</option>
                    <option value='Hägersten-Liljeholmen'>Hägersten-Liljeholmen</option>
                    <option value='Stureby-Hagsätra-Örby'>Stureby-Hagsätra-Örby</option>
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
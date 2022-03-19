import React from 'react';

const QuestionOptions = ({location, onLocationChange, onNextChange}) => {
    
    return (
        <div>
            <form className="form-box">
                <label htmlFor='location' className='question-text'>Where want to live?</label> 
                <select
                    className='input-box'
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
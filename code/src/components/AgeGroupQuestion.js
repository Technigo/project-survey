import React from 'react';
import Button from './Button';


const AgeGroupQuestion = ({ ageGroupInput, onAgeGroupInputChange, nextStep, previousStep }) => {
    return (
        <div className='flex'>
            <label htmlFor="age-group">How old are you?</label>
            <select value={ageGroupInput} onChange={onAgeGroupInputChange}>
                <option selected value='label'>Choose Age Group</option>
                <option value='Under 21'>Under 21</option>
                <option value='22-30'>22-30</option>
                <option value='30-45'>30-45</option>
            </select>
            <Button onClickFunction={nextStep} buttonText="Next!" />
            <Button onClickFunction={previousStep} buttonText="Go back!" />
        </div>
    );
};

export default AgeGroupQuestion;
import React from 'react';
import SubmitButton from './SubmitButton'


const Question3 = ({furType, setFurType}) => {
    
    return (
    
    <div className='third-question-section'> 
        <label htmlFor='third-question'>
            <h2 className='third-question-heading' tabIndex='0'> What type of fur do your like the do to have ?</h2>
        </label>
        <select
            id="third-question"
            onChange={(event) => setFurType(event.target.value)}
            value={furType}
            aria-label='select-menu'
            required>
            <option value=''>Pick a type of fur </option>
            <option value='short haired'>Short haired </option>
            <option value='curly fur'>Curly fur</option>
            <option value='long haired'>Long haired </option>
        </select> 
        <SubmitButton />
    </div>
    )};
export default Question3;
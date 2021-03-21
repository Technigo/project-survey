import React from 'react';

const RadioInput  = ({ QuestionAlternative, setAlternative }) => {
    const onAlternativeChange = (e) => {
        console.log(`Alternative: ${e.target.value}`)  
        setAlternative(e.target.value)
    }
    return (
        <>
            <div className="alternative-container">
                <input 
                    type="radio"
                    id={QuestionAlternative}
                    name={QuestionAlternative}
                    value={QuestionAlternative}
                    onChange={(e) => {
                    onAlternativeChange(e)
                    }}
                />
                <label htmlFor={QuestionAlternative}>{QuestionAlternative}</label>  
            </div>
        </>
    )
}
 
export default RadioInput;

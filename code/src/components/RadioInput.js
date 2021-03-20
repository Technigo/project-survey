import React from 'react';

const RadioInput  = ({ QuestionAlternative, setAlternative }) => {
    const onAlternativeChange = (e) => {
        console.log(`Alternative: ${e.target.value}`)  
        setAlternative(e.target.value)
    }
    return (
        <>
            <div className="alternative-container">
                <label htmlFor={QuestionAlternative}>{QuestionAlternative}</label>
                <input 
                    name="radioInput"
                    id={QuestionAlternative}
                    value={QuestionAlternative}
                    type="radio"
                    onChange={(e) => {
                        onAlternativeChange(e)
                    }}
                />
            </div>    
        </>
      )
}
 
export default RadioInput;

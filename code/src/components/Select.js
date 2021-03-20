import React from 'react';



const Select = ({question, onSelectChanged, selectAnswer}) => {
    return(
            <div>
                <label htmlFor="selectAnswer" >{question}</label>
                <select 
                    id="selectAnswer"
                    onChange={onSelectChanged}
                    value={selectAnswer}
                    required
                >
                    <option disabled value="">choose</option>
                    <option>Happy</option>
                    <option>Excited</option>
                    <option>Angry</option>
                    <option>Don't know - Don't care!</option>
                    <option>None of your business</option>
                </select>
            </div>
    )
}

export default Select;
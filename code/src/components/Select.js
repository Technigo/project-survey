import React from 'react';



const Select = ({question, onSelectChanged, selectValue}) => {
    return(
            <div>
                <label htmlFor="evaluationSelect">{question}</label>
                <select 
                    id="evaluationSelect"
                    onChange={onSelectChanged}
                    value={selectValue}
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
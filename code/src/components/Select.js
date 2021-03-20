import React from 'react';



const Select = ({question, onSelectChange, selectValue}) => {
    return(
            <div>
                <label htmlFor="selectAnswer" >{question}</label>
                <select 
                    id="selectAnswer"
                    onChange={onSelectChange}
                    value={selectValue}
                    required
                >
                    <option disabled value="">choose</option>
                    <option>happy</option>
                    <option>excited</option>
                    <option>angry</option>
                    <option>Don't know - Don't care!</option>
                    <option>None of your business</option>
                </select>
            </div>
    )
}

export default Select;
import React from 'react';

const Select = ({question, onSelectChange, selectValue}) => {
    return(
            <div className="select-element">
                <label htmlFor="selectAnswer">
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
                        <option>sad</option>
                        <option>mad</option>
                    </select>
                </label>
            </div>
    )
}

export default Select;
import React from 'react';

export const Age = ({age, setAge}) => {
    const onAgeChange = (e) => {
        console.log(`Age ${e.target.value}`);
        setAge(e.target.value);
    }

    return (
        <>
            <h4 tabIndex="0">How old are you:</h4>
            <div className="form-components">
                <select
                    onChange= {onAgeChange}
                    value={age}
                    required
                >
                    <option disabled value="">select age group</option>
                    <option value="0-18">0-18</option>
                    <option value="19-29">19-29</option>
                    <option value="30-39">30-39</option>
                    <option value="40-49">40-49</option>
                    <option value="50-59">50-59</option>
                    <option value="60-65">60-65</option>
                    <option value="Retired">Retired</option>
                </select>
            </div>
        </>
    )
}
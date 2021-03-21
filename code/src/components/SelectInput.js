import React from 'react';

import QA from './QA.json'


const SelectInput  = ({ setAlternative }) => {
    const onAlternativeChange = (e) => {
        console.log(`Alternative: ${e.target.value}`) 
        setAlternative(e.target.value)
    }
    return (
        <>
            <label htmlFor="questionFour-select"></label>
            <select 
                name="questionFour" 
                id="questionFour-select"
                onChange={(e) => {
                    onAlternativeChange(e)
                }}>
                {QA.form_content.questions[3].alternatives.map((alternative) => {
                    return (
                        <option
                            key={alternative}
                            >{alternative}
                        </option>
                    )})}
            </select>
        </>
    )
}
 
export default SelectInput;
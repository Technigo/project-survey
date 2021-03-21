import React from 'react'

//onFrequencyChange will be the prop name in parent file "Form"
export const FrequencyRadioOption = ({ frequencyValue, setFrequency }) => {

    const onFrequencyChange = (e) => {
        console.log(`Frequency: ${frequencyValue}`)
        setFrequency(e.target.value)
    }

    return (
        <>
            <div className="radio-option-container">
                <input 
                    name="frequency"
                    id={frequencyValue}
                    value={frequencyValue}
                    type="radio" 
                    onChange={(e) => {onFrequencyChange(e)}} 
                />
                <label htmlFor={frequencyValue}>{frequencyValue}</label>
            </div>
        </>

    )
}
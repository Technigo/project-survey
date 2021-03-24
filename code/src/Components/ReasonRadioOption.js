import React from 'react'

export const ReasonRadioOption = ({ reasonForTravelName, setReasonForTravel }) => {
    const onReasonForTravelChanged = (event) => {
        setReasonForTravel(event.target.value)
    }

    return (
        <>
            <label htmlFor={reasonForTravelName}>{reasonForTravelName}</label>
            <input 
            name='ReasonForTravel'
            id={reasonForTravelName}
            className="radio-dot"
            type='radio'
            value={reasonForTravelName}
            onChange={
                onReasonForTravelChanged
            }
            />               
        </>
    )
}

export default ReasonRadioOption
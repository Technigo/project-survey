import React, { useState } from 'react'

const Question6 = () => {
    const [ReasonForTravel, setReasonForTravel] = useState()

    return (
        <label className="question">
            6. Do you typically fly for business, personal reasons, or some other reason?   
            <input
                type='radio'
                value='Business'
                onChange={event => setReasonForTravel(event.target.value)}
                checked={ReasonForTravel === 'Business'}
            />
            Business
            <input
                type='radio'
                value='Personal'
                onChange={event => setReasonForTravel(event.target.value)}
                checked={ReasonForTravel === 'Personal'}
            />
            Personal
            <input
                type='radio'
                value='Other'
                onChange={event => setReasonForTravel(event.target.value)}
                checked={ReasonForTravel === 'Other'}
            />
            Other
        </label>
    )  
}

export default Question6
import React, { useState } from 'react'

const Question6 = () => {
    const [ReasonForTravel, setReasonForTravel] = useState()

    return (
        <label className="question">
            6. Do you typically fly for business, personal reasons, or some other reason? 
            <div className="radio-buttons">
                <div className="buttons">
                    <input
                    
                        type='radio'
                        value='Business'
                        onChange={event => setReasonForTravel(event.target.value)}
                        checked={ReasonForTravel === 'Business'}
                    />
                    Business
                </div>
                <div className="buttons">
                    <input
                        type='radio'
                        value='Personal'
                        onChange={event => setReasonForTravel(event.target.value)}
                        checked={ReasonForTravel === 'Personal'}
                    />
                    Personal
                </div>
                <div className="buttons">    
                    <input
                        type='radio'
                        value='Other'
                        onChange={event => setReasonForTravel(event.target.value)}
                        checked={ReasonForTravel === 'Other'}
                    />
                    Other
                </div>
            </div>
        </label>
    )  
}

export default Question6
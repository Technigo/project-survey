import React, { useState } from 'react'

const Question2 = () => {
    const [reasonForVisit, setReasonForVisit] = useState('')

    return (
        <label>
            2.  Why did you visit the airline website or app that day? What were you trying to do? 
            <input
                type='text'
                value={reasonForVisit}
                onChange={event => setReasonForVisit(event.target.value)}
            />
        </label>
    ) 
}

export default Question2
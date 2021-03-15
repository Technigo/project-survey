import React, { useState } from 'react'

const Question1 = () => {
    const [TimeSinceVisit, setTimeSinceVisit] = useState()

    return (
        <label>
            1.  When was the last time you visited an airline website or app?   
            <input
                type='radio'
                value='Within the last 4 weeks'
                onChange={event => setTimeSinceVisit(event.target.value)}
                checked={TimeSinceVisit === 'Within the last 4 weeks'}
            />
            Within the last 4 weeks
            <input
                type='radio'
                value='More than 4 weeks ago'
                onChange={event => setTimeSinceVisit(event.target.value)}
                checked={TimeSinceVisit === 'More than 4 weeks ago'}
            />
            More than 4 weeks ago
        </label>
    )
    
}

export default Question1
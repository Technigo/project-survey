import React, { useState } from 'react'

const Question1 = () => {
    const [timeSinceVisit, setTimeSinceVisit] = useState('')

    return (
        <label className="question">
            1.  When was the last time you visited an airline website or app?   
            <div className="select-container">
                <select className="select-field"
                value={timeSinceVisit}
                onChange={event => setTimeSinceVisit(event.target.value)}
                >
                    <option value=''>Time since visit:</option>
                    <option value='Within the last 4 weeks'>Within the last 4 weeks</option>
                    <option value='More than 4 weeks ago'>More than 4 weeks ago</option>
                </select>
            </div>
        </label>
    ) 
}

export default Question1
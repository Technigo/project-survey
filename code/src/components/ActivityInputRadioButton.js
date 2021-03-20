import React from 'react'

const ActivityInputRadioButton = ( { activityValue, onActivityChangeFunction } ) => {
    return (
        <div>
            <label key={activityValue} htmlFor={activityValue}>
            <input 
              name="activity"
              id={activityValue}
              value={activityValue}
              type="radio"
              onChange={onActivityChangeFunction} 
            />{activityValue}</label>
        </div>
    )
}

export default ActivityInputRadioButton

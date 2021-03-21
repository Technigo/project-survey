import React from 'react'

const ActivityInputRadioButton = ( { activityValue, onActivityChangeFunction } ) => {
    return (
        <fieldset>
          <label key={activityValue} htmlFor={activityValue}>
            <input 
              name="activity"
              id={activityValue}
              value={activityValue}
              type="radio"
              onChange={onActivityChangeFunction} 
          />{activityValue}</label>
        </fieldset>
    )
}

export default ActivityInputRadioButton

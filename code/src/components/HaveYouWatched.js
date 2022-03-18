import React, {useState} from 'react'

const HaveYouWatched = ({ 
    watchedStatus, 
    onWatchedChange, 
    stepChange 
    }) => {
   
    return (
    <form>

      <label>
          Have you seen BTVS?
          <select value={watchedStatus} onChange={event => onWatchedChange(event.target.value)}>
              <option value="yes">Heck yea!</option>
              <option value="little">Only a little...</option>
              <option value="no">No!</option>

          </select>
          
          
          </label>
      

      <button onClick={stepChange}>Next question</button>

    </form>

    )
}
export default HaveYouWatched
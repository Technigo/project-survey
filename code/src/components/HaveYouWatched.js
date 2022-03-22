import React from 'react'

import { Goodbye } from 'components/Goodbye'


const HaveYouWatched = ({ 
    watchedStatus, 
    onWatchedChange, 
    stepChange 
    }) => {
   
      
   
    return (
    <form>
        
        <div className="pergament"> </div>



      <label>
          Have you seen BTVS?
          <select className="select-container" value={watchedStatus} onChange={event => onWatchedChange(event.target.value)}>
            <option default value="" disabled>Choose!</option>
              <option value="yes">Seen it!? I re-watch it every year!</option>
              <option value="little">I’ve seen it a little but not actively watched it...</option>
              <option value="no">Nope, never seen anything</option>

          </select>
          
          
          </label>


      {watchedStatus === 'no' ? <Goodbye /> : ''}
      {watchedStatus === 'yes' ?  <button  tabindex="0"
      disabled={watchedStatus === '' || watchedStatus === 'no'}
      onClick={stepChange}>Next question</button>
 : ''}
{watchedStatus === 'little' ?  <button  tabindex="0"
      disabled={watchedStatus === '' || watchedStatus === 'no'}
      onClick={stepChange}>Next question</button>
 : ''}

     



    </form>

    )
}
export default HaveYouWatched
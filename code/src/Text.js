import React from 'react'

export const Text = ( {handleFormInput} ) => {
    
   

    return <div>

        <label htmlFor="text">I feel the need for</label>
        <input type="text" id="test" name="text" value="" onChange={e => {handleFormInput(e.target.value)}}/>
        

    </div>
    

    
  
}
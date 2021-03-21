import React from 'react';

const Submit = ({setSummary}) => {
    const formSubmit = event => {
        event.preventDefault()
        setSummary(true)
      }
    
    return (  
        <button
            onClick = {formSubmit}
            >Submit
        </button>
    )
}
 
export default Submit;
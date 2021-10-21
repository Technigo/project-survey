import React from "react"
import TextField from "./../inputTypes/TextField"

const Suggestions = ({
  improve, 
  setImprove,
  onStepChange,
}) => {
  return(
    <form>
      <label>How can the portfolio be improved?  
        <TextField
          value={improve}
          setValue={setImprove}
        />  
      </label> 
      <button 
        onClick={onStepChange}>Go to Summary
      </button>
    </form>
  )
}

export default Suggestions
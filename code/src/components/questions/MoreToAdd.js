import React from "react"
import TextField from "./../inputTypes/TextField"

const MoreToAdd = ({
  moreColor,
  setMoreColor,
  onStepChange,
}) => {
  return(
    <form>
      <label>How could I improve the color scheme?  
        <TextField
          value={moreColor}
          setValue={setMoreColor}
        />  
      </label> 
      <button onClick={onStepChange}>Next question</button>
    </form>
  )
}

export default MoreToAdd
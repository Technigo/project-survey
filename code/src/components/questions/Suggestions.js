import React from "react"
import TextField from "./../inputTypes/TextField"

const Suggestions = ({improve, setImprove}) => {
  return(
    <form>
      <label>How can the portfolio be improved?  
        <TextField
          value={improve}
          setValue={setImprove}
        />  
      </label> 
    </form>
  )
}

export default Suggestions
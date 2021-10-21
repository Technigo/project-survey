import React from "react"
import TextField from "./../inputTypes/TextField"

const MoreToAdd = ({
  additional,
  setAdditional,
  labeltext,
}) => {
  return(
    <>
      <label>{labeltext}  
        <TextField
          value={additional}
          setValue={setAdditional}
        />  
      </label> 
    </>
  )
}

export default MoreToAdd
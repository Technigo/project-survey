import React from "react"

export const FirstName = ({firstName, setFirstName}) => {
    return (
      <label className="Label">
         
        <input placeholder="First name"
          type="text"
          value={firstName}
          id={firstName}
          onChange={event => setFirstName (event.target.value)}
          required
        />    
      </label> 
    )
}
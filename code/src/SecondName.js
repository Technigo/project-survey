import React from "react"

export const SecondName = ({secondName, setSecondName}) => {
    return (
        <label className="Label">
         
          <input placeholder="Second name"
            type="text"
            value={secondName}
            id={secondName}
            onChange={event => setSecondName (event.target.value)}
          />
        </label>
    )
}


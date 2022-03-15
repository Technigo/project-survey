import React from "react"

import Start from "./Start"

const IsMember = () => {
    return (
        <form>
            <Start />
            Are you a member?
            <label>
                <input 
                  type="radio"
                  name="isMember"
                  value="Yes"
                  onChange={event => IsMember(event.target.value)}
                />
                Yes
            </label>
            <label>
                <input 
                  type="radio"
                  name="isMember"
                  value="No"
                  onChange={event => IsMember(event.target.value)}
                />
                No
            </label>
        </form>
    )
}

export default IsMember
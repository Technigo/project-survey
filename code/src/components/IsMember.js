import React from "react"


const IsMember = () => {
    return (
        <form>
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
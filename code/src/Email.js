import React from "react"

export const Email = ({email, setEmail}) => {
    return (
        <label className="Label">
           <h3>Email:</h3>
            <input
              type="email"
              value={email}
              id={email}
              onChange={event => setEmail (event.target.value)}
              required
            />
        </label>
    )
}


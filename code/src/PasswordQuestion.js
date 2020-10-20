import React from "react";


export const PasswordQuestion = ({ password , setPassword }) => {
    return (
    <label>
   Question 2
    <input
    type="password"
    value={password}
    onChange={event => setPassword(event.target.value)}
    required
    />
    </label>
)
}
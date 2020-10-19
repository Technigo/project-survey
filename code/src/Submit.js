import React from 'react'

export const Submit = () => {
    return <input type="submit" value="Submit" onSubmit={event => event.preventDefault()}></input>
}
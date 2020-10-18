import React from 'react'

export const Text = () => {
    return(
        <>
        <h2>Type in your message about this awesome survey:</h2>
        <form>
            <input type="text"></input>
            <button type="submit" value="Submit">Send!</button>
        </form>
        </>
    )
}
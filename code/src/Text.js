import React from 'react'

export const Text = () => {
    return(
        <>
        <h2>Type in your message about this awesome survey:</h2>
        <div>
            <input type="text"></input>
            <button type="submit" value="Submit">Send!</button>
        </div>
        </>
    )
}
/* Function for next question button:
const nextQuestion = () => setQuestion(question + 1) //to get next question in line (add +1 later) const previousQuestion = () => setQuestion(question - 1) */
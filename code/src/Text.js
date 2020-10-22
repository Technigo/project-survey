import React from 'react'

export const Text = (props) => {
    return(
        <>
        <h2 tabIndex={'0'}>What did you think about this awesome survey:</h2>
        <div>
            <input tabIndex={'0'} type="text" onChange={(event) => props.setUserText(event.target.value)}/>
        </div>
        </>
    )
}
/* Function for next question button:
const nextQuestion = () => setQuestion(question + 1) //to get next question in line (add +1 later) const previousQuestion = () => setQuestion(question - 1) */
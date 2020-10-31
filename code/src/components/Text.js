import React from 'react'
import './text.css'

export const Text = (props) => {
    return(
        <>
        <h2 tabIndex={'0'}>What did you think about this awesome survey:</h2>
        <div className={'text-input'}>
            <input tabIndex={'0'} type='text' onChange={(event) => props.setUserText(event.target.value)}/>
        </div>
        </>
    )
}
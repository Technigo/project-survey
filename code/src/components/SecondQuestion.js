import React, { useState } from 'react'

const SecondQuestion = (onNameInputChange, nextPage, backPage) => {

    const onEmailInputChange = ('')
    const emailInput = ('')

    return (

        <>
        <p>Alright {onNameInputChange}, </p>
        <label htmlFor="email">What's your email address?</label>

        <input
        className="question"
        type="Email"
        placeholder="email"
        value={emailInput}
        onChange={onEmailInputChange}
         />

        <div>
        <button className="btn" onClick={nextPage}>Next!
        </button>

        <button className="btn" onClick={backPage}>↩️ Go back
        </button>
        </div>
        </>
    )
}


export default SecondQuestion
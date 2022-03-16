import React, { useState } from 'react'

const SecondQuestion = (emailInput, nextPage, backPage) => {

    const onEmailInputChange = ('')

    return (

        <>
        <label htmlFor="email">Your e-mail adress:</label>

        <input
        className="question"
        type="email"
        placeholder="email"
        value={emailInput}
        onChange={onEmailInputChange}
         />


        <button className="btn" onClick={nextPage}>Next!
        </button>

        <button className="btn" onClick={backPage}>↩️ Go back
        </button>
        </>
    )
}


export default SecondQuestion
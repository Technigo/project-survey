import React from 'react'

const EmailQuestion = ({
    nameInput, 
    nextPage, 
    backPage,
    emailInput,
    onEmailInputChange
}) => {

    return (

        <>
        <p>Alright <span className="username">{nameInput}</span>,</p>
        <label htmlFor="email">What's your email address?</label>

        <input
        id="name"
        type="text"
        placeholder="name@email.com"
        value={emailInput}
        onChange={onEmailInputChange}
         />

        <div>

        <button className="btn" onClick={backPage}>
            <span role="img" aria-label="back arrow emoji">↩️</span> Go back
        </button>


        <button className="btn" onClick={nextPage}>Next!
        </button>

        </div>
        </>
    )
}


export default EmailQuestion
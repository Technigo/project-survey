import React from 'react'

const SecondQuestion = (nextPage, backPage) => {

    const onEmailInputChange = ('')
    const userEmailInput = ('')

    return (

        <>
        {/* <p>Alright {nameInput}</p> */}
        <label htmlFor="email">What's your email address?</label>

        <input
        className="question"
        type="text"
        placeholder="Email"
        value={userEmailInput}
        onChange={onEmailInputChange}
         />

        <div>
        <button className="btn" onClick={nextPage}>Next!
        </button>

        <button className="btn" onClick={backPage}><span role="img" aria-label="back arrow emoji">↩️</span> Go back
        </button>
        </div>
        </>
    )
}


export default SecondQuestion
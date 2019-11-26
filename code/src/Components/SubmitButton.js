import React, { useState } from 'react'




export const SubmitButton = () => {

    const [submitted, setSubmitted] = useState(false);
    return (

        <form onSubmit={event => event.preventDefault()}>

            <button className="submit-btn" onClick={() => setSubmitted(true)}>SUBMIT</button>
            {submitted}
        </form>


    )


}





import React, { useState } from 'react'
import "./Components/submit.css";

export const Submit = () => {
    const [submit, setSubmit] = useState()
    return (
        <form>
            <h3>Click!</h3>
            <button
                onClick={() => setSubmit(true)}
            >SUBMIT</button>
        </form>
    )
}

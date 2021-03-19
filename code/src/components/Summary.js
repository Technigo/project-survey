// import React, { useState } from 'react'
import React from 'react'
import Form from './Form'

const Summary = ({ name, size, flower }) => {
    return (
        <>
            <section>
                <h1 tabIndex="0">Thank you for your order!</h1>
                <h2 tabIndex="0">We will deliver a {size} bouquet with {flower} to {name}.</h2>
            </section>
        </>
    )

}

export default Summary;
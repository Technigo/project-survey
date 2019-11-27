import React from 'react'

export const FormHeader = () => {
    return (
        <header>
            <div className="hamburger">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <img src="assets/technigo.svg" alt="technigo logo" />
            <nav>
                <a href="https://www.technigo.io/"> Bootcamp</a>
                <a href="https://www.technigo.io/"> About</a>
                <a href="https://www.technigo.io/"> Join</a>
            </nav>
        </header>

    )
}
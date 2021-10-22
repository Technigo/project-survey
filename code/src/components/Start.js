import React from "react"

import Button from './Button'

const Start = () => {
    return (
        <>
            <section className="start-overview">
                <h1 className="name-survey">"About your plants" survey</h1>
                <p className="time-survey">Time to complete: ≈ 1-2 minutes</p>
            </section>
            <Button button="start" />
        </>
    )
}

export default Start
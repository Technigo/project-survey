import { Dropdown } from 'Dropdown'
import { Radio } from 'Radio'
import { Input } from './Input'
import React, { useState } from 'react'




export const Summary = ({ location }, { duration }, { mail }) => {
    const [showSummary, setShowSummary] = useState('false')

    const handleSubmit = event => {
        event.preventDefault()
        setShowSummary(true)
    }
        return (
            <section className="totalSummary">

                <p> WOW! You want to travel to {location} and stay there for {duration}. That's sounds dreamy!
                 We'll send the confirmation to {mail} </p>

            </section>

        )


}
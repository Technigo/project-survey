import React, {useState, useRef} from 'react'
import {Form} from 'components/Form'

export const StartPage = () => {
    const [done, setDone] = useState(false)
    const startRef = useRef()

    const Starting = () => {
        startRef.current.className += " noShow"
        setDone(true)
    }

    return (
        <section className="myForm">
            <h1>Do you need somewhere to live?</h1>
            <p>The Elephant Club offers rental appartments to people in need.</p>
            <button className = "btn" onClick={Starting}>I need a home</button>
            <Form />
        </section>

    )

    
}

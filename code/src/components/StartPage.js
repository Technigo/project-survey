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
        <>
        <section className="myForm" ref={startRef}>
            <h1>Would you like to go to College?</h1>
            <button className = "btn" onClick={Starting}>I want to start</button>
        </section>
        {done && <Form />}
        </>

    )

    
}

import React, {useState, useRef} from 'react'
import {Link} from 'react-router-dom'
import {Form} from 'components/Form'
import {Container} from '../shared/shared'


export const StartPage = () => {
    const [done, setDone] = useState(false)


    const Starting = () => {
        setDone(true)
    }

    return (
        <Container>
            <h1>Do you need somewhere to live?</h1>
            <p>The Elephant Club offers rental appartments to people in need.</p>
            <Link to='/form'>Form</Link>
            <button className = "btn" onClick={Starting}>I need a home</button>
      </Container>

    )

    
}

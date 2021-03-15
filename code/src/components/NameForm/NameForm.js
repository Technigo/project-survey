import React, {useState} from 'react'
import './NameForm.css'

const NameForm = () =>{
    const [name, setName] = useState('')
    return(
        <>
          <h2>1. What is your name? </h2> 
            <form>
                <input
                type="text"
                onChange={(event) => setName(event.target.value)}
                value={name}
                />
            </form> 
            <p>your name is {name}</p>
        </>
    )
}

export default NameForm
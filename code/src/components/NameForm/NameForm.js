import React, {useState} from 'react'
import './NameForm.css'

const NameForm = () =>{
    const [name, setName] = useState('')

    const onNameChange = (e) =>{
        setName(e.target.value)
    }

    return(
        <>
          <h2>1. A person I miss right now 💌 </h2> 
            <form onSubmit={event => event.preventDefault()}>
                <label htmlFor="name">Name</label>
                <input id="name"
                type="text"
                onChange={onNameChange}
                value={name}
                />
            </form> 
            <p>I miss{name}</p>
        </>
    )
}

export default NameForm
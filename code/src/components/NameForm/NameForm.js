import React from 'react'
import './NameForm.css'

const NameForm = ({name, setName}) =>{
    // const [name, setName] = useState('')

    const onNameChange = (e) =>{
        setName(e.target.value)
    }

    return(
        <div className="name-wrapper">
          <h2 className="name-heading"> A person I miss right now 💌 </h2> 
            <form className="name-form">
                <label htmlFor="sr-only"></label>
                <input className="name"
                name="name"
                type="text"
                placeholder="Type name here"
                onChange={onNameChange}
                value={name}
                />
            </form> 
        </div>
    )
}

export default NameForm
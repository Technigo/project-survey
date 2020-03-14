import React, {useState} from 'react'
import {Form, values} from 'components/Form'
export const Text = () => {
    const [first, setFirst] = useState("")
    const [last, setLast] = useState("")
    values[2] = `${first} ${last}` 
  
    // const handleSubmit = (evt) => {
    //   evt.preventDefault()
    //   alert(`Submitting Name ${name}`)
    // }
  
    return (
      // <form onSubmit={handleSubmit}>
      <>
      <label>
        First Name:
        <input
          type="text"
          value={first}
          onChange={e => setFirst(e.target.value)}
        />
      </label>
           <label>
           Last Name:
           <input
             type="text"
             value={last}
             onChange={e => setLast(e.target.value)}
           />
         </label>
    </>
    )
  
  }
import React, { useState, useRef } from 'react'
import { EndPage } from 'components/EndPage'
import {Form, values} from 'components/Form'

export const Select = () => {
    const [location, setLocation] = useState("")
    values[0] = location
  
    // const handleSubmit = (evt) => {
    //   evt.preventDefault()
    //   alert(`Submitting Name ${name}`)
  
    return (
      // <form onSubmit={handleSubmit}>
      <label>
        My city:
        <select
          onChange={e => setLocation(e.target.value)}
          value={location}
        >
          <option value="">Select location</option>
          <option value="stockholm">Stockholm</option>
          <option value="oslo">Oslo</option>
          <option value="london">London</option>
        </select>
      </label>
      // <input type="submit" value="Submit" />
      // </form>
    )
  }
  export const SelectForm = () => {
    const [done, setDone] = useState(false)
    const selectRef = useRef()
    // var hasName = (name === 'true') ? 'Y' :'N';
    const handleSubmit = (evt) => {
      evt.preventDefault()
      selectRef.current.className += " noShow"
      
      // alert(`Submitting Name ${values.toString()}`) 
      
    }
    return (
      <>
        <form className="myForm" onSubmit={handleSubmit} ref={selectRef}>
          <h1>I love you</h1>
          < Select />
          <button type ="submit" className="btn" onClick={setDone}>Submit answers</button>
        </form>
        {done && <EndPage name = {values[2]} city = {values[0]} age = {values[1]}/>}
  
      </>
  
    )
  
  }
  
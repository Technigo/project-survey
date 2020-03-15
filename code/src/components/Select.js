import React, { useState, useRef } from 'react'
import { EndPage } from 'components/EndPage'
import {values, Bar} from 'components/Form'

export const Select = () => {
    const [location, setLocation] = useState("")
    values.city = location
  
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
          <option value="Stockholm">Stockholm</option>
          <option value="Oslo">Oslo</option>
          <option value="London">London</option>
          <option value="Rome">Rome</option>
          <option value="Paris">Paris</option>
          <option value="Madrid">Madrid</option>
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
         <p>Where do you want to live?</p>
          < Select />
          <button type ="submit" className="btn" onClick={setDone}>Submit answers</button>
          <Bar size = "75"/>
        </form>
        {done && <EndPage name = {values.name} city = {values.city} room = {values.room} parking = {values.parking}/>}
  
      </>
  
    )
  
  }
  
import React, { useState, useRef } from 'react'
import { EndPage } from 'components/EndPage'
import {SelectForm} from 'components/Select'
import {Form, values, Bar} from 'components/Form'

export const RadioForm = () => {
    const [done, setDone] = useState(false)
    const radioRef = useRef()
    // var hasName = (name === 'true') ? 'Y' :'N';
    const handleSubmit = (evt) => {
      evt.preventDefault()
      radioRef.current.className += " noShow"
      
      // alert(`Submitting Name ${values.toString()}`) 
      
    }
    return (
      <>
        <form className="myForm" onSubmit={handleSubmit} ref={radioRef}>
          <h1>I love you</h1>
          < Radio />
          <CheckBox />
          <button type ="submit" className="btn" onClick={setDone}>Submit answers</button>
          <Bar size = "50"/>
        </form>
        {done &&  < SelectForm /> }
  
      </>
  
    )
  
  }
  const rooms = ["1 room", "2 rooms", "3+ rooms"]

export const Radio = () => {
  const [room, setRoom] = useState()
  values[1] = room

  // const handleSubmit = (evt) => {
  //   evt.preventDefault()
  //   alert(`Submitting Name ${name}`)
  // }
  return (
    // <form onSubmit={handleSubmit}>
<>
<p>Ages:</p>
    <label className="radio">
      {rooms.map(choice => (
        <div>
          <p key = {choice}>{choice}</p>
          <input
            type="radio"
            value={choice}
            onChange={e => setRoom(e.target.value)}
            checked={room === choice}
          />
        </div>
      ))}

    </label>
    </>

    // <input type="submit" value="Submit" />
    // </form>
  )

}
const CheckBox = () => {
  const [wantsParking, setParking] = useState(false)
  return (
    <label>
    Need parking?
    <input
      type="checkbox"
      checked={wantsParking}
      onChange={event => setParking(event.target.checked)}
    />
  </label>
  )
}
import React, { useState, useRef } from 'react'
import {SelectForm} from 'components/Select'
import {values, Bar} from 'components/Form'


  const rooms = ["1 room", "2 rooms", "3+ rooms"]

export const Radio = () => {
  const [room, setRoom] = useState()
  values.room = room

  // const handleSubmit = (evt) => {
  //   evt.preventDefault()
  //   alert(`Submitting Name ${name}`)
  // }
  return (
    // <form onSubmit={handleSubmit}>
<>
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

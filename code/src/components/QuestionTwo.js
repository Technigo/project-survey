import React from 'react'
import { useState } from 'react'

export const QuestionTwo = (props) => {
  const [place, setPlace] = useState("")
  return (
    <div className="question">
      <label>
        <h2>Question Two...</h2>
        <div className="select-main">
          <select
            onChange={event => setPlace(event.target.value)}
            value={place}
          >
            <option value="">Choose your place</option>
            <option value="place1">Place1</option>
            <option value="place2">Place2</option>
            <option value="place3">Place3</option>
          </select>
        </div>
      </label>
    </div>
  )

}
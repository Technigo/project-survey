import React from 'react'

export const Input1 = (props) => {
  return (
    <div>
      <h3>
        {props.question}
      </h3>
      <input type="text">
      </input>
    </div>
  )
}
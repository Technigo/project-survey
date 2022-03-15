import React from 'react'

export const Counter = (props) => {
    return (
        <div>
        <p>My current count {props.counter}</p>
        <button onClick={() =>props.setCounter(props.counter + 1)}>increase counter</button>
        <button onClick={() =>props.setCounter(props.counter - 1)}>decrease counter</button>
      </div>
    )

}
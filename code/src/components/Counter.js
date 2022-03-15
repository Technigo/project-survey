import React from 'react';

export const Counter = (props) => {
const counter = props.counter

    return (
    <div>
<p>My counter is: {props.counter}</p>
<button onClick={() =>props.setCounter(counter + 1)}> increase counter</button>
<button onClick={() =>props.setCounter(counter - 1)}> decrease counter</button>
</div>
)
}

import React from 'react'

export const EndPage = (props) => {

    return (
        <section className="endPage">
            <h1>Goodbye</h1>
    <p> your name is: {props.name}</p>
    <p> Your age group is: {props.age}</p>
    <p> your city is: {props.city}</p>
        </section>
    )
}
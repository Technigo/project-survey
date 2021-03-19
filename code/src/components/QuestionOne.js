import React, { useState } from 'react'
// import React from 'react'

const QuestionOne = ({ name, setName }) => {

    const onNameChange = (event) => {
        setName(event.target.value)
    }

    return (
        <>
            <section>
                <label htmlFor="name"></label>
                <input 
                    name="name"
                    id={name}
                    type="text"
                    value={name}
                    onChange={onNameChange}
                    placeholder="Type here"
                />
            </section>
        </>
    )
}

export default QuestionOne;
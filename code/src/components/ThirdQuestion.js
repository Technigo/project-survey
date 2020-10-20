import React from 'react'
import { useState } from 'react'

export const ThirdQuestion = () => {
    const [text, setText] = useState()


return (
    <div className='third-question'>
    <form>
        <h2>What was the main reason you wanted to to start at the Technigo bootcamp and become a frontend developer?</h2>
        <input
        type='text'
        onChange={event => setText(event.target.value)}
        value={text}
        />

    </form>
    </div>
    );

}; 
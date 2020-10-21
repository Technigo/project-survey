import React from 'react'

export const ThirdQuestion = ({text, setText}) => {
    


return (
    <div className='third-question'>
        <h2>What was the main reason you wanted to to start at the Technigo bootcamp and become a frontend developer?</h2>
        <input
        type='text'
        onChange={event => setText(event.target.value)}
        value={text}
        />
        
    </div>
    );

}; 
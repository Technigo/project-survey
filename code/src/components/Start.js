import { useState } from 'react'
import { render } from 'react-dom'


const Start = () => {

    const handleClick = () => {
    }

  return ( 
    <div className="startPage">
            <h1>What Brooklyn-Nine-Nine character are you?</h1>
            <h2>Let's find out with this quick 5 question-quiz!</h2>
            <label hidden for='startBtn'>Start</label>
            <button id="startBtn" type="button" onClick={handleClick}>Start</button>
    </div>
    )
}

export default Start;
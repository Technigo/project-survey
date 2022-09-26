import { useState } from 'react'

const Start = () => {

    const handleClick = () => {
    }

  return ( 
   
    <div className="startPage">
        <div className="startText">
            <h1>What Brooklyn-Nine-Nine character are you?</h1>
            <h2>Let's find out with this quick 5 questions-quiz!</h2>
            <label hidden for='startBtn'>Start</label>
            <button id="startBtn" type="button" onClick={handleClick}>Start</button>
        </div>
        <img className="image" src='/images/Brooklyn.png' alt="brooklyn"/>
    </div>
   
    )
}

export default Start;
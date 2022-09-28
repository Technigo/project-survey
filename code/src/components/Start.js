import React from 'react'

const Start = ( {username, setUsername, onStepChange} ) => {

  return ( 
   
    <div className='startPage'>
        <div className='startText'>
            <h1 tabIndex='0'>What do you know about Brooklyn Nine-Nine?</h1>
            <h2 tabIndex='0'>Let's find out with this 5 questions-quiz!</h2>
        </div>
        <div className='buttons'>
            <label hidden htmlFor='username_input'>Start</label>
                <input
                    type='text'
                    placeholder='Username'
                    className='username_input'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    />
                <label hidden htmlFor='startBtn'>Start</label>
                <button id='startBtn' type='button' tabIndex='0' onClick={onStepChange}>Start</button>
        </div>
        <img className='image' src='/images/Brooklyn.png' alt='brooklyn'/>
    </div>
   
    )
}

export default Start;
import React from 'react'

if (navigator.userAgent.match(/Android/)) {
    document.getElementsByClassName('start-image').style.display="none"
 }

const Start = ( {username, setUsername, onStepChange} ) => {

  return ( 
   
    <div className='startPage'>
        <div className='startText'>
            <h1 tabIndex='0'>How much do you know about Brooklyn Nine-Nine?</h1>
            <h2 tabIndex='0'>Let's find out!</h2>
        </div>
        <div className='buttons'>
            <label hidden htmlFor='username_input' tabIndex='0' aria-label='username'>Start</label>
                <input
                    type='text'
                    placeholder='Username'
                    className='username_input'
                    value={username}
                    requireds
                    onChange={(e) => setUsername(e.target.value)}
                    />
                <label hidden htmlFor='startBtn'>Start</label>
                <button id='startBtn' type='button' onClick={onStepChange}>Start</button>
        </div>
        <img className='start-image' src='/images/Brooklyn.png' alt='brooklyn'/>
    </div>
   
    )
}

export default Start;
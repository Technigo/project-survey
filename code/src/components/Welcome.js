import React from 'react'

const Welcome = () => {
    return (
        <header className='welcomeContainer'>
            
            <h1 className='welcomeText' tabIndex='0'>Let's connect!</h1>
            <div className='welcomeContent'>
            <p tabIndex='0'>We would love to get to know you better.</p>
            <p tabIndex='0'>Tell us a bit more about what kind of job you're interested in and we'll get in touch!</p>
            </div>

            <button
            className='startButton'
            type='button'
            onClick={(e) =>{
                e.preventDefault();
                window.location.href='#email'
            }}>Start adding info</button>

        </header>
    )
}

export default Welcome;
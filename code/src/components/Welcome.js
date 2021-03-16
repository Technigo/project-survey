import React from 'react'

const Welcome = () => {
    return (
        <header className='welcomeContainer'>
            <h1 className='welcomeText'>Let's connect!</h1>
            <div className='welcomeContent'>
            <p>We would love to get to know you better.</p>
            <p>Tell us a bit more about what you're looking for and we'll get in touch!</p>
            </div>
            <a href='#email' className='startButtonLink'><button className='startButton'>Start adding info</button></a>
        </header>
    )
}

export default Welcome;
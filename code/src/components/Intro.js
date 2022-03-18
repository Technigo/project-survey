import React from 'react'

const Intro = ({onNextChange}) => {
    return(
        <section id='intro' className='section'>
        <div className='intro-text'>
        <h2>Hey! Welcome to my survey about media habits!</h2>
        <h3>It's a quick survey that takes about a minute</h3>
        </div>

        <div>
        <button type='submit' onClick={onNextChange} className='btn'>Let's get started!</button>
        </div>
        </section>
    )
    
    
}
export default Intro
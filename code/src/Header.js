import React from 'react'

const Header = () => {
    return (
        <div className='header-wrapper'>
            <h1 tabindex='0'className='header-text'>Welcome to <span className='friend-match'>Friend Match!</span></h1>
            <p tabindex='0' className='header-paragraph'>Here the friendship starts. Get matched to a new friend and enjoy the new life experience together!</p>
        </div>
    )
}

export default Header

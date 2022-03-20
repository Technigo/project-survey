import React from 'react'

const Intro = ({ introInput, onIntroInputChange }) => {
    return (
        <>
            <div className='container'>
                <div className='intro-container'>
                    <h1>Welcome to Movie Survey!</h1>
                    <h2>Are you ready?</h2>
                </div>
            </div>
        </>
    );
};

export default Intro;
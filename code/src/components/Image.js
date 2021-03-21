import React from 'react'
import Confetti from './confetti.png'


const Image = () => {

    return (
        <section className="page-container">
            <div className="image-container">
                <img src={Confetti} alt="confetti" />
            </div>
        </section>
    )
}

export default Image
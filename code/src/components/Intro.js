import React from 'react';

const Intro = () => {
    
    const onButtonClick = () => {
        window.location.href ="#main-form"
    }

    return (

        <div className="intro" id="intro">
            <p>Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.
            Gumbo beet greens corn soko endive gumbo gourd.</p>
            <button className="button" onClick={onButtonClick}>Begin here</button>
        </div>
    )
}

export default Intro;
import React from 'react';
import 'emoji-slider';


const Slider = ({ happiness, setHappiness }) => {
return (
    <>
    <p className="quote"><strong>"Rememeber! A balanced diet is a cookie in each hand!"</strong></p>
<emoji-slider emoji="🍪" onChange={(event) => setHappiness(event)}></emoji-slider>
</>

);
};

export default Slider;

import React from 'react';
import 'emoji-slider';


const Slider = ({ happiness, setHappiness }) => {
return (
    <>
    <p>Drag the cookie</p>
<emoji-slider emoji="🍪" onChange={(event) => setHappiness(event)}></emoji-slider>
</>


);
};



export default Slider;

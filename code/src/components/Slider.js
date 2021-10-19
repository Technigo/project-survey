import React from 'react';
import 'emoji-slider';


const Slider = ({ happiness, setHappiness, onStepChange }) => {
return (
    <>
<emoji-slider emoji="🍪" onChange={(event) => setHappiness(event)}></emoji-slider>
</>


);
};



export default Slider;

import React, { useState } from 'react';

export const ColorQuestion = () => {
    const [color, setColor] = useState('');

    const onColorChanged = (event) => {
        console.log(event.target.value);
        setColor (event.target.value);
    };

    return (
    <div className="color-question">
            <p>Pick your favourite?</p>
            <div className="color-wine">
            <label htmlFor="red">Red Wine
            <input name="wine" id="red" type="radio" value="red" onChange={onColorChanged}/>
            </label>
            <label htmlFor="white">White Wine
            <input name="wine" id="white" type="radio" value="white" onChange={onColorChanged}/>
            </label>
            <label htmlFor="rose">Rosé Wine
            <input name="wine" id="rose" type="radio" value="rose" onChange={onColorChanged}/>
            </label>
            </div>
        </div>

    );
};
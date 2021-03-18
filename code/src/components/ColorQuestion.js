import React, { useState } from 'react';

const colors = ["red wine", "white wine", "rosé wine"];

export const ColorQuestion = () => {
    const [wineColor, setWineColor] = useState('');

    const onWineColorChanged = (event) => {
        console.log(event.target.value);
        setWineColor (event.target.value);
    };

    return (
    <div className="color-question">
        <p>Pick your favourite?</p>
            <div className="color-wine">
                {colors.map(color => (
                    <label key={color}>
                    <input name="wine color" 
                    id={color} 
                    type="radio" 
                    value={color} 
                    onChange={onWineColorChanged} 
                    checked={wineColor === color}
                    required
                    />
                    {color}
                    </label>
                ))}
            </div>
    </div>
    );
};
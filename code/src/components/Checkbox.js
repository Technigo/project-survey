import React from'react';


export const Checkbox = ({userColors, onColorsChange}) => {

    return (
        <div>
            <label htmlFor="colorRed">Red</label>
            <input
                id="colorRed"
                type="checkbox"
                checked={userColors.includes('red')}
                onChange={() => onColorsChange('red')}
            />
            <label htmlFor="colorBlue">Blue</label>
            <input
                id="colorBlue"
                type="checkbox"
                checked={userColors.includes('blue')}
                onChange={() => onColorsChange('blue')}
            />
        </div>
    );
};
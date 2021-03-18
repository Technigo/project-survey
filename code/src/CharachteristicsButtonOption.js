import React from 'react';

const CharacteristicsButtonOptions = ({
    characteristicsName, 
    setInputCharacteristics, 
}) => {

const onInputCharacteristicsChanged = (e) => {
    setInputCharacteristics(e.target.value);
    console.log(e.target.value)
}
    return (
        <>
            <label htmlFor={characteristicsName}>{characteristicsName}</label>
                <input 
                    name="characteristics"
                    id={characteristicsName} 
                    value={characteristicsName}
                    type="radio"
                    onChange={(e) => {
                        onInputCharacteristicsChanged(e);
                    }}
                />   
            </>
    );
};

export default CharacteristicsButtonOptions;
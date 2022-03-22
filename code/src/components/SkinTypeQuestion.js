import React from 'react';
import Button from './Button';

const SkinTypeQuestion = ({ skinTypeInput, onSkinTypeInputChange, nextStep, previousStep }) => {
    const skinTypes = [
        'Dry or dehydrated',
        'Normal',
        'Combination',
        'Oily or acne-prone'
    ]
    return (
        <div className='flex'>
            <p>What's your skin type?</p>
            <div className='skin-type-options'>
                {skinTypes.map(skintype => (
                    <label key={skintype}>
                        <input type='radio' value={skintype} onChange={onSkinTypeInputChange} checked={skinTypeInput === skintype} />
                        {skintype}
                    </label>
                ))}
            </div>
            <Button onClickFunction={nextStep} buttonText="Next!" />
            <Button onClickFunction={previousStep} buttonText="Go back!" />
        </div>
    );
};

export default SkinTypeQuestion;
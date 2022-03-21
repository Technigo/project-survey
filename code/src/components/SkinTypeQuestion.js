import React from 'react';


const SkinTypeQuestion = ({ skinTypeInput, onSkinTypeInputChange, nextStep, previousStep }) => {
    const skinTypes = [
        'Dry or dehydrated',
        'Normal',
        'Combination',
        'Oily or acne-prone'
    ]
    return (
        <div>
            <p>What's your skin type?</p>
            <form>
                {skinTypes.map(skintype => (
                    <label key={skintype}>
                        <input type='radio' value={skintype} onChange={onSkinTypeInputChange} checked={skinTypeInput === skintype} />
                        {skintype}
                    </label>
                ))}
            </form>
            <div>
                <button className="button" type="submit" onClick={nextStep}>
                    Next!</button>
            </div>
            <div>
                <button className="button" type="submit" onClick={previousStep}>
                    Go Back</button>
            </div>
        </div>
    );
};

export default SkinTypeQuestion;
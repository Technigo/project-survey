import React from 'react';


const SkinTypeQuestion = ({ skinTypeInput, onSkinTypeInputChange, nextStep }) => {
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
                <button className="btn" type="submit" onClick={nextStep}>
                    Next question!</button>
            </div>
        </div>
    );
};

export default SkinTypeQuestion;
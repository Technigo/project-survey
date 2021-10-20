import React from 'react'

const ThirdQuestion = ({ onQuestionChange, alias, weapon, onWeaponChange }) => {
    return (
        <div>
            <h2>Time to gear up</h2>
            <p>{alias}, choose your weapon:</p>
            <form>
                <label htmlFor="paperclip"><span role="img" aria-label="paper clip">📎</span></label>
                <input 
                    type="radio" 
                    name="weapon"
                    id="paperclip" 
                    value={weapon}
                    onChange={onWeaponChange}
                    onClick={onQuestionChange}
                    />
                    <label htmlFor="crayon"><span role="img" aria-label="crayon">🖍</span></label>
                <input 
                    type="radio"
                    name="weapon"
                    id="crayon" 
                    value={weapon}
                    onChange={onWeaponChange}
                    onClick={onQuestionChange}
                    />
            </form>
        </div>
    )
}

export default ThirdQuestion
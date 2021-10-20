import React from 'react'
import SecondQuestion from './SecondQuestion'

const ThirdQuestion = ({ onQuestionChange, alias, weapon, onWeaponChange }) => {
    return (
        <div>
            <h2>Time to gear up</h2>
            <p>{alias}, choose your weapon:</p>
            <form>
                <label htmlFor="paperclip">📎</label>
                <input 
                    type="radio" 
                    name="weapon"
                    id="paperclip" 
                    value={weapon}
                    onChange={onWeaponChange}
                    onClick={onQuestionChange}
                    />
                    <label htmlFor="chalk">🖍</label>
                <input 
                    type="radio"
                    name="weapon"
                    id="chalk" 
                    value={weapon}
                    onChange={onWeaponChange}
                    onClick={onQuestionChange}
                    />
            </form>
        </div>
    )
}

export default ThirdQuestion
import React from 'react'


export const Question3 = ({ gift, onGiftChange }) => {
    return (
        <section className="question3 section">
            <label>
                <h2>If it wasn't for corona, I would give you</h2>
                <select 
                    value={gift} 
                    required
                    aria-required="true"
                    onChange={e => onGiftChange(e.target.value)}
                >
                        <option value="">Choose your gift</option>
                        <option value="hug">a hug</option>
                        <option value="kiss">a kiss</option>
                        <option value="a hug and a kiss">a hug and a kiss</option>
                </select>
            </label>
        </section>
    )
}
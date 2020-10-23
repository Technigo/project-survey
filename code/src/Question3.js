import React from 'react'


export const Question3 = ({ gift, setGift, onGiftChange }) => {
    return (
        <section>
            <label>
                <h2>If it wasn't for corona, I would give you</h2>
                <select 
                    value={gift} 
                    onChange={e => onGiftChange(e.target.value)}>
                        <option value="">Choose your gift</option>
                        <option value="hug">a hug</option>
                        <option value="kiss">a kiss</option>
                        <option value="javascript">a hug and a kiss</option>
                </select>
            </label>
        </section>
    )
}
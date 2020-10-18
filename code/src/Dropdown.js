import React from 'react'

export const Dropdown = () => {
    return (
        <form>
            <h2>What do you like?</h2>
            <select>
                <option value="ketchup">Ketchup</option>
                <option value="beer">Beer</option>
                <option value="ketchup and beer">Both</option>
            </select>
        </form>
    )

}
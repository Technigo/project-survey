import React from 'react'

export const Dropdown = (props) => {
    return (
        <form>
            <h2>What do you like?</h2>
            <select>
                <option value={props.one}>{props.one}</option>
                <option value={props.two}>{props.two}</option>
                <option value={props.three}>{props.three}</option>
            </select>
        </form>
    )

}
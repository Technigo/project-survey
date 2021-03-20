import React from 'react'

const DropDown = (props) => {
    return (
        <form>
            <select 
                onChange={event => props.toChange(event.target.value)}
                value={props.skillLevel}
            >
                <option value={props.options[0].value}>{props.options[0].label}</option>
                <option value={props.options[1].value}>{props.options[1].label}</option>
                <option value={props.options[2].value}>{props.options[2].label}</option>
                <option value={props.options[3].value}>{props.options[3].label}</option>
                <option value={props.options[4].value}>{props.options[4].label}</option>
                <option value={props.options[5].value}>{props.options[5].label}</option>
            </select>        
        </form>
    )
}

export default DropDown;
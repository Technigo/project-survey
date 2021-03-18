import React from 'react'

const DropDown = (props) => {
    return (
        <form>
            <select 
                onChange={event => props.toChange(event.target.value)}
                value={props.skillLevel}
            >
                <option value={props.options[0].option}>{props.options[0].label}</option>
                <option value={props.options[1].option}>{props.options[1].label}</option>
                <option value={props.options[2].option}>{props.options[2].label}</option>
                <option value={props.options[3].option}>{props.options[3].label}</option>
                <option value={props.options[4].option}>{props.options[4].label}</option>
                <option value={props.options[5].option}>{props.options[5].label}</option>
            </select>        
        </form>
    )
}

export default DropDown;
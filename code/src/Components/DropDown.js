import React from 'react'

const DropDown = (props) => {

    return (
            <select
                className={props.skillLevel.overlap ? "error": "okay"} 
                onChange={
                    event => props.toChange(event.target.value)}
                value={props.skillLevel.stat}
            >
                <option value={props.options[0].value}>{props.options[0].label}</option>
                <option value={props.options[1].value}>{props.options[1].label}</option>
                <option value={props.options[2].value}>{props.options[2].label}</option>
                <option value={props.options[3].value}>{props.options[3].label}</option>
                <option value={props.options[4].value}>{props.options[4].label}</option>
                <option value={props.options[5].value}>{props.options[5].label}</option>
            </select>
    )
}

const isError = (props) => { 
    
    if (props.skillLevel === props.otherSkillLevel_a || props.skillLevel === props.otherSkillLevel_b) {
        console.log(`${props.skillLevel} equals either ${props.otherSkillLevel_a} or ${props.otherSkillLevel_b}`)
        return true
    } else {
        return false
    }
}

export default DropDown;
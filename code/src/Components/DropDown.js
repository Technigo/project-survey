import React from 'react'

const DropDown = (props) => {
    return (
        <form>
            <select 
                onChange={event => props.toChange(event.target.value)}
                value={props.question.options}
            >
                <option value="">{}</option>
                
            </select>        
        </form>
    )
}

export default DropDown;
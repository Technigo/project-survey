import React from 'react'
import DropDown from './DropDown'

const DropDownWrapper = (props) => {
    return (
        <form className="dropdown-wrapper">
            <DropDown 
                question={props.question}
                toChange={props.toChange}
                options={props.options}
                skillLevel={props.skillLevel}
                source={props.source}
            />
        </form>
    )
}

export default DropDownWrapper;
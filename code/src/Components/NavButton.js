import React from 'react'

const NavButton = (props) => {
    
    return (
        <button 
            className="nav-button"
            onClick={() => props.navigate(props.direction)}
        >{props.direction === -1 ? "<" : ">"}</button>
    )                           //this might fail cuz strings??
    
}

export default NavButton;
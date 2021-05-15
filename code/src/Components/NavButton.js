import React from 'react'

const NavButton = (props) => {
    return (
        <button 
            className="nav-button"
            onClick={() => props.navigate(props.direction)}
            disabled={
              (props.currentPage === 1 && props.direction === -1) 
              || (props.currentPage === 5 && props.direction === 1)
              ? true 
              : false
            }
        >
          {props.direction === -1 ? "<" : ">"}
        </button>
    )
    
}

export default NavButton;
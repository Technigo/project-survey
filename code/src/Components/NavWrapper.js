import React from 'react'
import NavButton from './NavButton'
import PageCounter from './PageCounter'

const NavWrapper = (props) => {
    
    return (
        <div className="nav-wrapper">
            <NavButton 
                direction={-1}
                navigate={props.navigate}
            />
            <PageCounter 
                currentPage={props.currentPage}
                lastPage={props.lastPage}
            />
            <NavButton 
                direction={1}
                navigate={props.navigate}
            />
        </div>
    )
    
}

export default NavWrapper;
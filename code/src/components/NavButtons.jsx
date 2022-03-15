import React from 'react';

const NavButtons = (props) => {
    return (
        <div className="nav-buttons">
            <button onClick={() => props.navBar(props.pageNumber - 1)}>Back</button>
            <button onClick={() => props.navBar(props.pageNumber + 1)}>Forward</button>
        </div>
    )
}

export default NavButtons
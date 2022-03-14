import React from 'react';

const NavButtons = (props) => {
    return (
        <div>
            <button onClick={() => props.navBar(props.pageNumber - 1)}>Back</button>
            <button onClick={() => props.navBar(props.pageNumber + 1)}>Forward</button>
            <p>{props.pageNumber}</p>
        </div>
    )
}

export default NavButtons
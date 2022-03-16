import React from 'react';

const refreshPage = () => {
    window.location.reload();
}

const leftAlign = {
    justifyContent: 'flex-end'
}

const NavButtons = (props) => {
        if (props.pageNumber === 0) {
            return (
                <div className="nav-buttons" style={leftAlign}>
                    <button onClick={() => props.setPageNumber(props.pageNumber +1)}>Forward</button>
                </div>
            )
        } else {
            return (
                <div className="nav-buttons">
                {props.pageNumber > 0 && props.pageNumber <= 9 && <button onClick={() => props.setPageNumber(props.pageNumber - 1)}>Back</button>}
                {props.pageNumber > 0 && props.pageNumber < 9 && <button onClick={() => props.setPageNumber(props.pageNumber +1)}>Forward</button>}
                {props.pageNumber === 9 && <button onClick={refreshPage}>Restart</button>}
            </div>
            )
        }
}

export default NavButtons
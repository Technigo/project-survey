import React from 'react'

const PageCounter = (props) => {
    
    return (
        <div className="page-counter">
           {props.currentPage} / {props.lastPage}
        </div>
    )
    
}

export default PageCounter;
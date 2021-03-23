import React from 'react'

export const Header = (props) => {
    return (
        <header className="survey-page-header">
            <h1 className="survey-title">{props.headline}</h1>
        </header>
    )
}

export default Header
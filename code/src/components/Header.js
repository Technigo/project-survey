import React from "react";
import './Header.css'

export const Header = (props) => {
    return (
        <div className="header-bg">
            <h1>{props.title}</h1>
        </div>
    )
}
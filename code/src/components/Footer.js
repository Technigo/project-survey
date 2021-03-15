import React from "react";
import './Footer.css'

export const Footer = (props) => {
    return (
        <div className="footer-bg">
            <h4>{props.copyRight}</h4>
        </div>
    )
}
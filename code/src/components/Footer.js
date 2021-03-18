import React from "react";

import './Footer.css'

export const Footer = ({copyRight}) => {
    return (
        <div className="footer-bg">
            <h4>{copyRight}</h4>
        </div>
    )
}
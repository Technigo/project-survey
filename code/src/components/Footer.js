import React from "react";

import './Footer.css'

export const Footer = ({copyRight}) => {
    return (
        <div className="footer-bg">
            <h4 id="footer">{copyRight}</h4>
        </div>
    )
}
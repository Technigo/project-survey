import React from "react";

export const Footer = () => {
    return (
        <footer>
            <p>Created by Henrike Wiemker</p>
            <p>Photo by Susan Yin on Unsplash</p>
            <p>Technigo Bootcamp</p>
            <p>November 2020</p>
            <img src={require("./logo.svg")} alt="The Technigo logo"/>
        </footer>
    )
}
import React from "react";






export const Respons = ( {name, eyeColor, noseSize, smile, hasMustache} ) => {
    return (
        <>
        <div id="summary"> 
        <p>Name: {name}</p>
        <p>Nose: {noseSize}</p>
        <p>Eyecolor: {eyeColor}</p>
        <p>Smile: {smile}</p>
        <p>Has a mustache: {hasMustache}</p>
        </div>
        </>
    )
}


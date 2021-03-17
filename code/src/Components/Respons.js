import React from "react";






export const Respons = ( {name, eyeColor, sizeOfNose, smile, hasMustache} ) => {

    return (
        <>
        <div id="summary"> 
        <p>Name: {name}</p>
        <p>Nose: {sizeOfNose}</p>
        <p>Eyecolor: {eyeColor}</p>
        <p>Smile: {smile}</p>
        <p>Has a mustache: {hasMustache}</p>
        </div>
        </>
    )
}


import React from "react";






export const Respons = ( {name, eyeColor, sizeOfNose, smile, hasMustache} ) => {

    return (
     
        <div id="summary" className="respons-container"> 
        <div className="respons-border">
            <div className="face-pics-container">
                <p>Nose: {sizeOfNose} <img src="/Components/assets/small_nose_2.jpg"/> </p>
                <p>Eyecolor: {eyeColor}</p>
                <p>Smile: {smile}</p>
                <p>Has a mustache: {hasMustache}</p>
                  
            </div>
        <div className="name-container">
                    <p>{name}</p>
                    </div>
        
       
        
       
        </div>
        </div>
    
    )
}


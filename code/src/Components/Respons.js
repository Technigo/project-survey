import React from "react";






export const Respons = ( {name, eyeColor, sizeOfNose, smile, hasMustache} ) => {

    return (
        <div id="summary" className="respons-container"> 
        <div className="respons-border">
            <div className="face-pics-container">  
                {eyeColor==="Brown" ? <img className="pics" src="../assets/brown_eyes.jpg"/> :null}
                {eyeColor==="Blue" ? <img className="pics" src="../assets/blue_eyes.jpg"/> :null}
                {eyeColor==="Green" ? <img className="pics" src="../assets/green_eyes.jpg"/> :null}
                {sizeOfNose==="Small nose" ? <img className="pics" src="../assets/small_nose_2.jpg"/> :null}
                {sizeOfNose==="Big nose" ? <img className="pics" src="../assets/big_nose.jpg"/> :null}
                {sizeOfNose==="Pointy nose" ? <img className="pics" src="../assets/small_nose.jpg"/> :null}
                {smile==="Smiling" & hasMustache!=="on" ? <img className="pics" src="../assets/happy.jpg"/> :null}
                {smile==="Smiling" & hasMustache==="on" ? <img className="pics" src="../assets/happy_mustache.jpg"/> :null}
                {smile==="Sad" & hasMustache!=="on" ? <img className="pics" src="../assets/sad.jpg"/> :null}
                {smile==="Sad" & hasMustache==="on" ? <img className="pics" src="../assets/sad_mustache.jpg"/> :null}
                
            </div>
            <div className="name-container">
                <p>{name}</p>
            </div>

        </div>
        </div>
    
    )
}


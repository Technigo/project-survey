import React from "react";






export const Respons = ( {name, eyeColor, sizeOfNose, smile, hasMustache} ) => {

    return (
        <>
        <div id="summary" className="respons-container"> 
            <div className="respons-border">
                <div className="face-pics-container">  
                    {eyeColor==="Brown" ? <img className="pics" src="../assets/brown_eyes.jpg" alt="Brown eyes"/> :null}
                    {eyeColor==="Blue" ? <img className="pics" src="../assets/blue_eyes.jpg" alt="Blue eyes"/> :null}
                    {eyeColor==="Green" ? <img className="pics" src="../assets/green_eyes.jpg" alt="Green eyes"/> :null}
                    {sizeOfNose==="Small nose" ? <img className="pics" src="../assets/small_nose_2.jpg" alt="Small nose"/> :null}
                    {sizeOfNose==="Big nose" ? <img className="pics" src="../assets/big_nose.jpg" alt="Big nose"/> :null}
                    {sizeOfNose==="Pointy nose" ? <img className="pics" src="../assets/small_nose.jpg" alt="Pointy nose"/> :null}
                    {smile==="Smiling" & hasMustache!=="on" ? <img className="pics" src="../assets/happy.jpg" alt="Happy no mustache"/> :null}
                    {smile==="Smiling" & hasMustache==="on" ? <img className="pics" src="../assets/happy_mustache.jpg" alt="Happy with mustache"/> :null}
                    {smile==="Sad" & hasMustache!=="on" ? <img className="pics" src="../assets/sad.jpg" alt="Sad no mustache"/> :null}
                    {smile==="Sad" & hasMustache==="on" ? <img className="pics" src="../assets/sad_mustache.jpg" alt="Sad with mustache"/> :null}
                    
                </div>
                <div className="name-container">
                    <p>{name}!</p>
                </div>
              
            </div>
            
            
        </div>
          <div className="respons-container">
                <button
                    className = 'reload-btn'
                    type="button"
                    onClick={() => window.location.reload()}>
                    Restart
                </button>
            </div>
    </>
    )
}


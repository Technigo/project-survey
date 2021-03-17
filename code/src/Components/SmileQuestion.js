import React from "react";




export const SmileQuestion = ({ smile, setSmile }) => {
    const onSetSmile  = (e) => {
    console.log(`Smile: ${e.target.value}`);
    setSmile(e.target.value); }
    return(
        <div className="questions-container">
            <div className="wrapper">
                <div>
                    <label className="label">
                    Are you happy?
                        <input
                            className="radio-botton"
                            type="radio"
                            value="Smiling"
                            onChange={(e) => onSetSmile(e)}
                            checked={smile === "Smiling"}
                        />  
                    </label> 
                </div> 
                <div>   
                    <label className="label">
                    Are you sad?
                        <input
                            className="radio-botton"
                            type="radio"
                            value="Sad"
                            onChange={(e) => onSetSmile(e)}
                            checked={smile === "Sad"}
                        />
                    </label> 
                </div>
            </div>
        </div>
    );
};


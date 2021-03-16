import React, { useState } from "react";




export const SmileQuestion = () => {
    const [smile, setSmile] = useState()

    return(
        <form className="questions-container">
            <div className="wrapper">
                <div>
                    <label className="label">
                    Are you :) ?:
                        <input
                            className="radio-botton"
                            type="radio"
                            value="Smiling"
                            onChange={event => setSmile(event.target.value)} 
                            checked={smile === "Smiling"}
                        />  
                    </label> 
                </div> 
                <div>   
                    <label className="label">
                    Are you :( ?
                        <input
                            className="radio-botton"
                            type="radio"
                            value="Sad"
                            onChange={event => setSmile(event.target.value)}
                            checked={smile === "Sad"}
                        />
                    </label> 
                </div>
            </div>
        </form>
    );
};


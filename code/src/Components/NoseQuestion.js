import React, { useState } from "react";




export const NoseQuestion = () => {
    const [noseSize, setNoseSize] = useState()

    return(
        <form className="questions-container">
            <div className="wrapper">
                <div>
                    <p className="p label">Do You have a:</p>
                    <label className="label">
                    Small nose?
                        <input 
                            className="radio-botton"
                            type="radio"
                            value="Small nose"
                            onChange={event => setNoseSize(event.target.value)} 
                            checked={noseSize === "Small nose"}
                        />  
                    </label> 
                </div>
                <div>  
                    <label className="label">
                    Big nose?
                        <input
                            className="radio-botton"
                            type="radio"
                            value="Big nose"
                            onChange={event => setNoseSize(event.target.value)}
                            checked={noseSize === "Big nose"}
                        />
                    </label> 
                </div>   
                <div>   
                        <label className="label">
                    Pointy nose?
                        <input
                        className="radio-botton"
                            type="radio"
                            value="Pointy nose"
                            onChange={event => setNoseSize(event.target.value)}
                            checked={noseSize === "Pointy nose"}
                        />
                    </label> 
                </div>
            </div>
        </form>
    );
};


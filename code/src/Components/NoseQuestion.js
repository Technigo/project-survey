import React, { useState } from "react";




export const NoseQuestion = ({ sizeOfNose, setSizeOfNose }) => {
   const onNoseSizeChange  = (e) => {
    console.log(`Nosesize: ${e.target.value}`);
    setSizeOfNose(e.target.value); }
    return(
        <div className="questions-container">
            <div className="wrapper">
                <div>
                    <p className="p label">Do You have a:</p>
                    <label className="label">
                    Small nose?
                        <input 
                            className="radio-botton"
                            type="radio"
                            value="Small nose"
                            onChange={(e) => onNoseSizeChange(e)} 
                            checked={sizeOfNose === "Small nose"}
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
                            onChange={(e) => onNoseSizeChange(e)} 
                            checked={sizeOfNose === "Big nose"}
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
                            onChange={(e) => onNoseSizeChange(e)} 
                            checked={sizeOfNose === "Pointy nose"}
                        />
                    </label> 
                </div>
            </div>
        </div>
    );
};


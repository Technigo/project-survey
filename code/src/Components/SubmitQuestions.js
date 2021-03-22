import React from "react";

export const SubmitQuestions = ({submit, setSubmit}) => {
    const onSetSubmit  = (e) => {
    setSubmit(!submit) }

    return(
        <div className="questions-container">
            <input 
            className="submit-btn" 
            type="submit" 
            value="Face it now?" 
            onClick={(e) => onSetSubmit(e)}
            />
        </div>  
    );
};


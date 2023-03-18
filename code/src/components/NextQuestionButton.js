/* eslint-disable */

import React from "react";


export const NextQuestionButton = ({ button, onClickNext }) => {

    return (
        
            <div className="nextButtonBox">
                <button className="nextQuestionButton" onClick={onClickNext} type="submit" >
                    {button}
                </button>
            </div>
        

    )
}


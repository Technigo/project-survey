/* eslint-disable */

import React from "react";


export const BackQuestionButton = ({ button, onClickBack }) => {

    return (
        
            <div className="backButtonBox">
                <button className="backQuestionButton"  type="submit" onClick={onClickBack} >
                    {button}
                </button>
            </div>
        

    )
}


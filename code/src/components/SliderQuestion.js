/* eslint-disable */

import React from "react";
import { NextQuestionButton } from "./NextQuestionButton";
import { BackQuestionButton } from "./BackQuestionButton";

export const SliderQuestion = ({ range, onRangeChange, onClickBack, onClickNext }) => {
    //console.log(range)
    //console.log(onRangeChange)
    return (
        <div className="sliderQuestionBox">
            <p>Tell us your satisfaction:</p>
            <div className="sliderBox">
                <input type="range" min="1" max="10" value={range} onChange={onRangeChange} />
            </div>
            <div className="buttonWraperBox">
                <BackQuestionButton button="Back" onClickBack={onClickBack} />
                <NextQuestionButton button="Next" onClickNext={onClickNext} />
            </div>
        </div>

    )
};
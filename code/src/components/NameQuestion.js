/* eslint-disable */

import React from "react";
import { NextQuestionButton } from "./NextQuestionButton";
import { BackQuestionButton } from "./BackQuestionButton";

export const NameQuestion = ({ name, onNameChange, onClickBack, onClickNext }) => {
    return (
        <div className="nameQuestionBox">
            <p>
                What is your name?
            </p>
            <div className="nameBox">
                <input
                    id="name-input"
                    name="name-input"
                    type="text"
                    onChange={onNameChange}
                    value={name}
                    required
                />
            </div>
            <div className="buttonWraperBox">
                <BackQuestionButton button="Back" onClickBack={onClickBack} />
                <NextQuestionButton button="Next" onClickNext={onClickNext} />
            </div>

        </div>
    )

}
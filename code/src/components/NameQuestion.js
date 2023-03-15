/* eslint-disable */

import React from "react";
import { NextQuestionButton } from "./NextQuestionButton";

export const NameQuestion = ({name,onNameChange}) => {
   return(
        <div className="nameQuestionBox">
            <p>
                What is your name?
            </p>
            <section className="nameBox">
                <input
                id="name-input"
                name="name-input"
                type="text"
                onChange={onNameChange}
                value={name}
                required
                />
            </section>
            <NextQuestionButton button="Next" />

        </div>
    )

}
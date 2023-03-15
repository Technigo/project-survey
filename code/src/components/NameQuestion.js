/* eslint-disable */

import React from "react";
import { NextQuestionButton } from "./NextQuestionButton";

export const NameQuestion = ({name,onNameChange}) => {
   return(
        <div>
            <p>
                What is your name?
            </p>
            <section>
                <input
                id="name-input"
                name="name-input"
                type="text"
                onChange={onNameChange}
                value={name}
                required
                />
            </section>
            <NextQuestionButton button="NextQuestion" />

        </div>
    )

}
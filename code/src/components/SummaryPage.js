/* eslint-disable */
import React from "react"
import { NextQuestionButton } from "./NextQuestionButton";
import { BackQuestionButton } from "./BackQuestionButton";

export const SummaryPage = ({ name, ageGroup, product, range, onClickBack, onClickNext }) => {
    return (
        <div className="summaryBox">
            <div className="summaryPage">
                <h2>
                    Thank you {name}!
                    You are in age group: {ageGroup},
                    you purchase {product} from us,
                    your satisfaction is {range}
                </h2>
            </div>
            <div className="buttonWraperBox">
                <BackQuestionButton button="Back" onClickBack={onClickBack} />
                <NextQuestionButton button="Next" onClickNext={onClickNext} />
            </div>

        </div>
    )
}
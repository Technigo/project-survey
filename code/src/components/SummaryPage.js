/* eslint-disable */
import React from "react"
import { NextQuestionButton } from "./NextQuestionButton"

export const SummaryPage = ({ name, ageGroup, product }) => {
    return (
        <div className="summaryBox">
            <div className="summaryPage">
                <h2>
                    Thank you {name}!
                    You are in age group: {ageGroup},
                    you purchase {product} from us.
                    We appreciate your time!
                </h2>
            </div>
            <NextQuestionButton button="Submit" />

        </div>
    )
}
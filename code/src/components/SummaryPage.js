/* eslint-disable */
import React from "react"
import { NextQuestionButton } from "./NextQuestionButton"

export const SummaryPage = ({name,ageGroup,product}) => {
    return(
        <>
        <div className="summaryPage">
            <p>
                Thank you {name}!
                You are in age group: {ageGroup},
                you purchase {product} from us.
                We appreciate your time!
            </p>
        </div>
        <NextQuestionButton button="Submit" />
       
        </>
    )
}
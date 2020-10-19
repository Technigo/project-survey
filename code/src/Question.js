import React from "react";
import { AnswerArea } from "./AnswerArea"

export const Question = ({ item }) => {
    return (
        <>
            <h2>{item.question}</h2>
            <AnswerArea key={item.question} item={item}/>
        </>
    )
}
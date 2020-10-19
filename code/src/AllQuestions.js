import React from "react"
import { Question } from "./Question"

const surveyData = [
    {
        question: "How many books do you read per year?",
        formType: "radio",
        options: [
            "0-6",
            "7-12",
            "13-18",
            "19-24",
            ">24"
        ]
    },
    {
        question: "How do you prefer to consume a book?",
        formType: "dropdown",
        options: [
            "reading the printed book",
            "reading the e-book",
            "listening to the audio book"
        ]
    },
    {
        question: "Who is your favourite author?",
        formType: "text",
        options: [

        ]
    }
];

export const AllQuestions = () => {
    return (
        <>
            {surveyData.map((topic) => (
                <section>
                    <form>
                        <Question key={topic.question} item={topic}/>
                    </form>
                </section>
            ))}
        </>
    )
}
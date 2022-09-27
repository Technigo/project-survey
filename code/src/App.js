import React from "react";
import Questions from "components/Questions";

const dataQuestions = [
  {
    id: "question1",
    question_text: "FIRST OF ALL, WHATS YOUR NAME?",
    input_type: "text",
  },
  {
    id: "question2",
    question_text: "ENERGYWISE, WHATS YOUR PREFERENCE TODAY?",
    input_type: "select",
    options: [
      { value: "Super high", label: "Super high" },
      { value: "Medium", label: "Medium" },
      { value: "Low key", label: "Low key" },
    ],
  },
  {
    id: "question3",
    question_text: "WHAT TYPE OF MUSIC DO YOU PREFER?",
    input_type: "radio",
    options: [
      { value: "Classic", label: "Classic" },
      { value: "Hiphop", label: "Hiphop" },
      { value: "World", label: "World" },
    ],
  },
];

/////XXX//////

export const App = () => {
  return (

<main>
       {dataQuestions.map((question) => { //funkar får fram tre object        
       return(
      
            <Questions
                key={question.id}
                question_text={question.question_text}
                input_type={question.input_type}
                />
              
              )
      })
    }
  </main>
)}
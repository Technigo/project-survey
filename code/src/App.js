import React, { useState } from "react";
import Form from "Form.js";
import Answers from "Answers.js"
import questionnaire from "./sampleQuestionnaire.json"

export const App = () => {
  const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false) /* if true, show answers */

  const questions = questionnaire.questions

  /* Create answers hook - array with  default values */
  const defaultAnswers = questions.map(question => question.defaultAnswer)
  const [answers, setAnswers] = useState(defaultAnswers)
  
  return (
    <>
      {!hasBeenSubmitted ? (
        <Form
        setHasBeenSubmitted={setHasBeenSubmitted}
          answers={answers}
          setAnswers={setAnswers}
          questions={questions}
        />
      ) : (
        <Answers questions={questions} answers={answers} />
      )}
    </>
  )
}

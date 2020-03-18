import React, { useState } from 'react'
import 'component/surveycard.css'
import 'component/fonts.css'
import { QuestionOne } from './QuestionOne'
import { QuestionTwo } from './QuestionTwo'
import { QuestionThree } from './QuestionThree'
import { Summery } from './Summery'

export const SurveyCard = () => {
  // Order iterates thru each question
  const [order , setOrder] = useState(0)
  // Answer stores each answer
  const [answer, setAnswer] = useState([])

  // Function to store answer and change to next question
  const handleNextPage = (answerValue) => {
    setOrder(order + 1);
    answer.push(answerValue);
    setAnswer(answer);
  }

  // Restart from beginning
  const resetOrder = () => setOrder(0);

  // Store each question component in array to iterate thru with order/setOrder
  // whenNext is a prop which calls the function handleNextPage
  const questionArray = [
    <QuestionOne whenNext={handleNextPage}/>, 
    <QuestionTwo whenNext={handleNextPage} />, 
    <QuestionThree whenNext={handleNextPage} />,
    <Summery whenNext={resetOrder} answer={answer}/>
  ]
  
  return (
    <article className="surveycard">

       {/* Display current question based on order hook and array index */}
      {questionArray[order]}

    </article>
  )
}
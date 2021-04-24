import React, { useState } from 'react'
import { Summary } from './Summary'
import './survey.css'



const questions = [
  { 
    question: "How many times have Cersie been married?",
    answers: ["Never", "Once", "Twice", "Three times", "Four times"],
    correctAnswer: "Once"
  },
  {
    question: "How did Tyrion kill his father Tywin?",
    answers: ["Poison", "In the battle field", "With Joffrey's crossbow", "pushed him off a rock"],
    correctAnswer: "With Joffrey's crossbow"
  },
  {
    question: "Which character did The Mountain when he took on the Viper?",
    answers: ["Oberyn Martell", "Cersie", "Sansa", "Daenerys"],
    correctAnswer: "Oberyn Martell"
  },
  {
    question: "What does Cersie blow up using wildfire in Season 6?",
    answers: ["The Citadel", "The Great Sept of Baelor", "The Three-eyed-Raven's tree", "The Wall"],
    correctAnswer: "The Great Sept of Baelor"
  },
  {
    question: "Whose last words were 'It's nothing'?",
    answers: ["Jaime Lannister", "Cersie","The hound", "Joffrey Baratheon"],
    correctAnswer: "Joffrey Baratheon"
  }
]
// An object for the correct answers, which are imported to Summary, to compare the user-answer with the currect answer

// React Hooks
export const Survey = () => {

  const [submitted, setSubmitted] = useState(false);
  const initialAnswers = questions.map(item => null) // [null, null]

  const [userAnswers, setUserAnswers] = useState(initialAnswers)

  // A function which sent an alert, if user don't answer all the question. 
  const handelSubmit = (event) => {
    event.preventDefault()

    if (userAnswers.includes(null)) {
      alert("Answer all questions ... ")
    } else {
      setSubmitted(true)
      // If all questions are answered scroll to top
      window.scrollTo(0, 0)
    }
  }

  const updateAnswer = (index, answer) => {
    userAnswers[index] = answer
    setUserAnswers(userAnswers)
  }

  return (
    <div className="form-container">

      {/* Display none on the form - shows the summary and hides the form, when the submit btn trigged */}
      {!submitted && (
        <div className="form-wrapper">
          <h2>How well do you remember GoT?</h2>          
          <form onSubmit={handelSubmit} className="form-style">

          {questions.map((item, index) => (
            <div className="question-card" key={index}>
              <h3> {item.question} </h3>
              <div>
                {item.answers.map((answer) => (
                  <label key={answer} className="radio-circle">

                    <input
                      type="radio"
                      name={item.question}
                      value={answer}
                      onChange={event => updateAnswer(index, event.target.value)}
                      id={answer}
                    />
                    <span className="checkmark" role="radio" aria-checked="false" tabIndex="0"></span>
                    {answer}
                  </label>
                ))}
              </div>
            </div>
          ))}

          <button className="submit-btn"> Finish </button>
          </form >
        </div>
      )}

      {submitted && <Summary userAnswers={userAnswers} questions={questions} />}
    </div >
  )
}
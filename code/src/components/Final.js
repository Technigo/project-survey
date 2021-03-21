import React from 'react'

const Final = ({ questionArray, answerArray }) => {

  return (
    <article className="final-container">
      <h1 className="title">These are your selections</h1>
      {
        answerArray.map((showData) => {
          return (
            <div key={showData.questionId}>
              <p><span className="mark">Q: </span>{questionArray[showData.questionId].question}</p>
              <p><span className="mark">A: </span>{showData.answer}</p>
            </div>
          )
        })
      }
    </article>
  )
}

export default Final;
import React from 'react'


const Final = ({ questionArray, answerArray }) => {

  return (
    <article className="final-container">
      <h1 className="title">These are your selections</h1>
      {
        answerArray.map((showData) => {
          return (
            <div key={showData.questionId}>
              <p><p className="mark">Q: </p>{questionArray[showData.questionId].question}</p>
              <p><p className="mark">A: </p>{showData.answer}</p>
            </div>
          )
        })
      }
    </article>
  )
}

export default Final;
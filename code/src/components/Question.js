import React from 'react';

const Question = ({ questionIndex, setQuestionIndex, questions, setShowQuestionsForm, setShowResult, score, setScore }) => {
    
  const handleClick = (isCorrect) => {
    if (questionIndex < 4) {
      if (isCorrect) {
        setScore((score) => (score += 1));
      }

      setQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      if (isCorrect) {
        setScore((score) => (score += 1));
      }

      setShowQuestionsForm(false);
      setShowResult(true);
    }
  };

  return (
    <div className='question-wrapper'>
      <h1>{questions[questionIndex].questionText}</h1>

      <div className='answers'>
        {questions[questionIndex].answers.map((answer, i) => (
          <div
            key={i}
            className='answer'
            onClick={() => handleClick(answer.isCorrect)}
          >
            <p>{answer.answerText}</p>
          </div>
        ))}
      </div>

      <p className='score'>
        Score: <span>{score}</span>
      </p>

      <p className='question-number'>
        Question <span>{questionIndex + 1}</span>/5
      </p>
    </div>
  );

};

export default Question;
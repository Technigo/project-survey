import React from 'react';

const Summary = ({ correctAnswers, selectedAnswers }) => {
  console.log('correctAnswers: ', correctAnswers);
  console.log('your answers: ', selectedAnswers);
  return (
    <>
      <h2>Summary</h2>
      <table border='1'>
        <tr>
          <th>Question:</th>
          {correctAnswers.map((_, index) => (
            <td key={index}>{index + 1}</td>
          ))}
        </tr>
        <tr className='summary-answers'>
          <th>Correct answer:</th>
          {correctAnswers.map((answer) => (
            <td key={answer}>{answer}</td>
          ))}
        </tr>
        <tr>
          <th>Your answer:</th>
          {selectedAnswers.map((answer) => (
            <td key={answer}>{answer}</td>
          ))}
        </tr>
      </table>
    </>
  );
};

export default Summary;

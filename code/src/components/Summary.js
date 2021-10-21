import React from 'react';

const Summary = ({ correctAnswers, selectedAnswers }) => {
  return (
    <>
      <h2>Summary</h2>
      <table border='1' className='summary-table'>
        <thead>
          <tr>
            <th>Question</th>
            <th>Correct Answer</th>
            <th>Selected Answer</th>
          </tr>
        </thead>
        <tbody>
          {correctAnswers.map((answer, index) => (
            <tr key={answer}>
              <th>{index + 1}</th>
              <td>{answer}</td>
              <td
                style={{
                  backgroundColor:
                    correctAnswers[index] === selectedAnswers[index]
                      ? '#81e681'
                      : '#f19696',
                }}
              >
                {selectedAnswers[index]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button type='button' onClick={() => window.location.reload(false)}>
        Play again &gt;&gt;
      </button>
    </>
  );
};

export default Summary;

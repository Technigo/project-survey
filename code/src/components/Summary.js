import React from 'react';

const Summary = ({ correctAnswers, selectedAnswers }) => {
  // console.log('correctAnswers: ', correctAnswers);
  // console.log('your answers: ', selectedAnswers);

  // const greenColor = {
  //   color: '#00695c',
  // };

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
            <tr key={answer} className='summary-answers'>
              <th>{index + 1}</th>
              <td>{answer}</td>
              <td>{selectedAnswers[index]}</td>
            </tr>
            //   {correctAnswers[index] === selectedAnswers[index] && (
            //     style={greenColor}
            // )}
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Summary;

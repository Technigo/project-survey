import React, { memo } from 'react';

const Result = ({age, frequency, museum, memory}) => {
    return (
      <div>
        <h2>Your answers</h2>
        <ul>
          <li><span className="bold-p">Age:</span> {age}</li>
          <li><span className="bold-p">Visits per year:</span> {frequency}</li>
          <li><span className="bold-p">Favoriture museum:</span> {museum} </li>
          <li><span className="bold-p">Museum memory:</span> {memory}</li>
          </ul>

          <p>If you are happy with your answers to this survey, please press submit. 
            Otherwise, you are most welcome to go back and change your answers.</p>
      </div>
    );
  }

  export default Result
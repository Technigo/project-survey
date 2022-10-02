import React from 'react';

const Result = ({age, frequency, museum, memory, improvements}) => {
    return (
      <>
        <h2>Thank you for participating!</h2>
          <p>From the bottom of our culture-loving hearts, we thank you for taking our survey. View your answers below.</p>
          <h3>Your answers</h3>
            <ul>
              <li><span className="bold-p">Age:</span> {age}</li>
              <li><span className="bold-p">Visits per year:</span> {frequency}</li>
              <li><span className="bold-p">Favoriture museum:</span> {museum} </li>
              <li><span className="bold-p">Museum memory:</span> {memory}</li>
              <li><span className="bold-p">Possible improvemets:</span> {improvements}</li>
            </ul>

          <div className="link-container">
            <span className="arrow" aria-hidden="true"> ✨ </span>
            <a href="https://www.stockholmmuseums.se/en" target="_blank">Discover more about the Stockholm museum scene</a>
            <span className="arrow" aria-hidden="true"> ✨ </span>
          </div>
      </>
    );
  }

  export default Result
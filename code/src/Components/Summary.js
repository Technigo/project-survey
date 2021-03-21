import React from "react";

const Summary = ({name, feedback, evaluation, project, thoughts }) => {

  return (
    <section className="summary-container">
        <p>
            Thank you <span className="answer-text">{name} </span> for taking your time and filling out the survey! 
            Here are a summary of your answers: 
        </p>
        <p>
            It seems like you are <span className="answer-text">{evaluation}</span> to become a developer.
        </p>
        <p>
            You paragraph project was the <span className="answer-text">{project}</span>.
        </p>
        <p>
           More thoughts:<span className="answer-text">{thoughts}</span>
        </p>
    </section>

  );
};

export default Summary;

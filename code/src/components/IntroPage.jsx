import React from "react";

const Intro = () => {
  return (
    <div className="page-container">
      <h2 className="center title underline">Personality & Values Survey</h2>
      <span className="explanation">
        <h3>Welcome to the personality & values survey!</h3>
        <br />
        <p>
          This survey is divided into two parts. The first part is a personality
          inventory and takes about 5 minutes to complete. After completing the
          first section, your scores will be presented against demographic data
          for your age group.
        </p>
        <br />
        <p>
          The second part of the survey is about basic human values. It takes
          about 10 minutes to complete, and your scores will also be displayed
          at the end, along with an explanation of the scores.
        </p>
        <br />
        <p>
          Please make sure read the instructions carefully, and take your time
          reflecting over the questions, to receive the most accurate
          measurements.
        </p>
        <br />
        <p>
          <span className="bold underline">NOTE:</span> The explanations for
          your scores can be accessed via the button underneath the chart with
          your results.
        </p>
        <br />
        <h3 className="bold">Enjoy!</h3>
      </span>
    </div>
  );
};

export default Intro;

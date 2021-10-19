import React from "react";

const Summary = ({
  nameInput,
  songInput,
  birdInput,
  radioInput,
  ageRadioInput,
}) => {
  return (
    <section className="form-container">
      <h2 className="label-text">Here's your summary</h2>
      <div className="summary-container">
        <p>
          name:<span class="answer-text"> {nameInput}</span>
        </p>
        <p>
          last song listened to: <span class="answer-text"> {songInput}</span>
        </p>
        <p>
          {" "}
          least favorite bird:<span class="answer-text"> {birdInput} </span>
        </p>
        <p>
          can you lick your elbow? <span class="answer-text">{radioInput}</span>
        </p>
        <p>
          you feel this old:<span class="answer-text"> {ageRadioInput}</span>
        </p>
        <form className="submit-button-form">
          <button className="submitBtn" type="submit">
            restart
          </button>
        </form>
        <div>
          <iframe
            className="confetti"
            src="https://giphy.com/embed/PMV7yRpwGO5y9p3DBx"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Summary;

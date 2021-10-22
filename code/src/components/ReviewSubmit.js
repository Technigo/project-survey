import React from "react";

const ReviewSubmit = ({ answers }) => {
  const containerStyle = {
    backgroundColor: answers[2],
  };

  const pStyle = {
    fontFamily: answers[3],
  };

  const phraseStyle = {
    display: "block",
    fontWeight: "bold",
    fontSize: "18px",
    textAlign: "center",
    lineHeight: "30px",
  };

  return (
    <div style={containerStyle} className="review-container">
      <p>Hello {answers[0]},</p>
      <p style={pStyle}>
        Your favourite word or phrase is:{" "}
        <span style={phraseStyle}>{answers[1]}</span> writen in {answers[3]}.
      </p>
      <p>We hope you like the {answers[2]} background!</p>
      <p>{answers[4]}</p>

      <p>Here's a CSS code snippet you might like:</p>
      <div className="css-container">
          <p className="css-first-line">
            <span className="css-class">.{answers[1]}</span> {`{`}
          </p>
        <ul>
          <li><span className="css-property">background-color</span>: <span className="css-attribute">{answers[2]}</span>;</li>
          <li><span className="css-property">font-family</span>: <span className="css-attribute">"{answers[3]}"</span>;</li>
          <li>{`}`}</li>
        </ul>
      </div>
    </div>
  );
};

export default ReviewSubmit;

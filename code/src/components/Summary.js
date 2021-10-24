import React from "react";

import "./summary.css";
/* This is not completely reusable, if I would like to do so 
I'd change the text inside each <p></p> to be props and specify the props in Survey.js. */
export const Summary = (props) => {
  console.log(props);
  return (
    <section className={"summSection"}>
      <div className="sumtext">
        <h2>Summary of {props.userMessage}</h2>
        <p>
          Today you are feeling {props.feeling} and i am feeling {props.feeling} with you, because I feel with you!
        </p>
        <p>Your favorite part of the day: "{props.dayPart}".</p>
        <p>Your shower times : "{props.shower}".</p>
        <p>Your favorite room at your place : "{props.roomChoice}".</p>
        <p>You put your faith in: {props.faith}.</p>
        <p>
          Thank you {props.userMessage} for getting to know you a little bit. And remember "{props.userMessage}" is the center of your life😉
        </p>
      </div>
    </section>
  );
};

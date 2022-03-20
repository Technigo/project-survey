import React from "react";
import Button from "./Button";

const Info = () => {
  return (
    <section className="main">
      <div className="intro-text">
        <h1>Hello fellow nature enthusiast!</h1>
        <h2>
          Summer is just around the corner... Fill out our short survey to tell
          us about your travel plans!
        </h2>
      </div>
      <Button button="Let's go!" />
    </section>
  );
};

export default Info;

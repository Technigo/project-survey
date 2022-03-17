import React from "react";
import Button from "./Button";

const Info = () => {
  return (
    <section className="main">
      <section className="info-section">
        <div className="intro-text">
          <h1>Hello, let's dream about SUMMER in SWEDEN</h1>
          <h2>Fill out our short survey to tell us about your travel plans!</h2>
        </div>
        <Button button="Let's go!" />
      </section>
    </section>
  );
};

export default Info;

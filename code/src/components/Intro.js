import React from "react";

const Intro = ({ Change }) => {
  return (
    <header className="header">
      <section className="intro">
        <h1>Welcome to "getting to know you"survey</h1>
        <h3>Grab a coffee and lets get started</h3>
        <button onClick={Change} className="button">
          START
        </button>
      </section>
    </header>
  );
};

export default Intro;

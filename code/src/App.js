import React, { useState } from "react";

import { Header } from "./components/Header";
import { ProgressBar } from "./components/ProgressBar";
import { Footer } from "./components/Footer";
import { ToggleQuestions } from "./components/ToggleQuestions";

export const App = () => {
  const [nextQuestion, setNextQuestion] = useState("");

  return (
    <div className="wrapper">
      <header className="header">
        <Header title="The FUTURE" />
      </header>

      {nextQuestion === "" && (
        <>
          <h2 className="question-heading">Let's talk about the future!</h2>
        </>
      )}

      <ToggleQuestions
        nextQuestion={nextQuestion}
        setNextQuestion={setNextQuestion}
      />

      {/*Shows progressionbar on questions done */}
      <ProgressBar nextQuestion={nextQuestion} />

      <footer className="footer">
        <Footer copyRight="&copy; Pauline Andersson 2021" />
      </footer>
    </div>
  );
};

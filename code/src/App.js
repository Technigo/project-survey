import React, { useState } from "react";

import { Header } from "./components/Header";
import { ProgressBar } from "./components/ProgressBar";
import { Footer } from "./components/Footer";
import { ToggleQuestions } from "./components/ToggleQuestions";

export const App = () => {
  const [questionNumber, setQuestionNumber] = useState("");

  return (
    <div className="wrapper" aria-sort="descending">
      <header className="header" aria-labelledby="header">
        <Header title="The FUTURE" />
      </header>

      {questionNumber === "" && (
        <div className="start-page" aria-labelledby="start-heading">
          <h2 className="question-heading" id="start-heading">Let's talk about the future!</h2>
        </div>
      )}

      <ToggleQuestions
        questionNumber={questionNumber}
        setQuestionNumber={setQuestionNumber}
      />

      {/*Shows progressionbar on questions done */}
      <ProgressBar questionNumber={questionNumber} />

      <footer className="footer" aria-labelledby="footer">
        <Footer copyRight="&copy; Pauline Andersson 2021" />
      </footer>
    </div>
  );
};

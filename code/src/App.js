import React from "react";

import AllQuestions from "components/AllQuestions";

export const App = () => {
  return (
    <>
      <div className="main">
        <AllQuestions />
      </div>
      <footer className="footer">
        Photo by{" "}
        <a href="https://unsplash.com/@codestorm?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Safar Safarov
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/s/photos/coding?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Unsplash
        </a>
      </footer>
    </>
  );
};

import React, { useState } from "react";

import HeroImg from "./components/HeroImg";

export const App = () => {

  const [currentNum, setQuestionNum] = useState(0);

  {questionNum === 0 &&  <HeroSection nextQuestion = {nextQuestion}/>}


  return (
    <>
      <form className="mainForm" onSubmit={submit}>
        <div className="formContainer">
          <p>hello </p>
        </div>

      </form>
    </>
  );
}

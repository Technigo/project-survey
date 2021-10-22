import React, {useState} from "react";

import AllQuestions from "components/AllQuestions";
import WelcomePage from "components/WelcomePage";
import Footer from "components/Footer";

export const App = () => {
  const [welcome, setWelcome] = useState(true);

  const handleWelcomeClick = (e) => {
    e.preventDefault()
    setWelcome(false)
  }

  return (
    <>
      <div className="main">
        {welcome ? <WelcomePage setWelcome={handleWelcomeClick}/> : <AllQuestions />}
      </div>
      <Footer />
    </>
  );
};

import React, { useState } from "react";

const SignIn = ({ onStepChange }) => {
  const [SignIn, setSignIn] = useState("");
  const onSignInChange = (event) => setSignIn(event.target.value);
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>We help you select the best movies</h1>
        <h2>Enter your E-mail and start the Movie Selector</h2>
        <div className="start-box-child">
          <form>
            <p>Put your E-mail her Movie Selector</p>
            <label htmlFor="nameInput"></label>
            <input
              id="nameInput"
              type="text"
              value={SignIn}
              onChange={onSignInChange}
            />
          </form>
          <button type="button" className="hero-button" onClick={onStepChange}>
            enter
          </button>
        </div>
      </div>
    </section>
  );
};

{
  /* <header>
<img className="hero-img"></img>

<button className="entrebutton" onClick={() => setStep(step + 1)}>
  {"ENTRÉ THE MOVIE SELECTOR "}
</button>
</header> */
}
export default SignIn;

import React from "react";
import Sunflower from "icons/sunflower.png";

const IntroPage = (props) => {
  const { onStepChange } = props;
  return (
    <div className="form-container">
      <div className="text-container">
        <form onSubmit={onStepChange}>
          <h1>Hello!</h1>
          <h2>
            We are so happy you want to join our gardening course this spring!
          </h2>
          <p>Enter your details in the following form to save your spot.</p>
          <button className="btn" type="submit">
            Sign up
          </button>
        </form>
      </div>
      <div className="icon-container">
        <img src={Sunflower} className="icon" alt="Sunflower" />
      </div>
    </div>
  );
};
export default IntroPage;

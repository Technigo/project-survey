//First question
import React from "react";

const Name = ({ name, onNameChange, onStepChange }) => {
  return (
    <>
      <div>
        {/*  <img className="nameImg" src="../images/pineapple.png"></img> */}

        <div className="container">
          <div className="name">
            <h2>I’m so exited that you want to attend to my party!</h2>

            <form className="nameForm">
              Please enter your name below:
              <input
                id="name"
                type="text"
                onChange={onNameChange}
                value={name}
                placeholder="Name"
              />
              <button disabled={name === ""} onClick={onStepChange}>
                Next Question
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Name;

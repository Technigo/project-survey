import React from "react";
import Header from "./Header";

export const FifthQuestionYes = ({
  nameInput,
  onStepChange,
  satisfactionTextInput,
  onSatisfactionTextInputChange,
}) => {
  return (
    <>
      <Header />
      <div className="page-wrapper">
        <img
          src="https://www.ehandel.se/wp-content/uploads/2020/10/citymail_fossilfritt.jpg"
          alt="Citymail bil"
          className="side-picture"
        />
        <form onSubmit={onStepChange} className="content-container">
          <div>
            <h2>
              {nameInput}, vad tråkigt att du är missnöjd med din postutdelning.
            </h2>
            <p>
              Vi vill alltid förbättra oss på Citymail. Beskriv gärna konkreta
              situationer där du varit missnöjd!
            </p>
            <label
              htmlFor="satisfactionInput"
              className="input-label-container"
            >
              Förklara
              <textarea
                id="satisfactionInput"
                type="text"
                value={satisfactionTextInput}
                onChange={onSatisfactionTextInputChange}
              />
            </label>
          </div>
          <button type="submit">Skicka</button>
        </form>
      </div>
    </>
  );
};

export default FifthQuestionYes;

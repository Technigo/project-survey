import React from "react";
import Header from "./Header";

export const FourthQuestion = ({
  satisfactionInput,
  onSatisfactionInputChange,
  onStepChange,
}) => {
  return (
    <>
      <Header />
      <form onSubmit={onStepChange} className="content-container">
        <h2> Är du nöjd med utdeling av din post?</h2>
        <div className="options-spacing">
          <label htmlFor="SatisfactionYes" className="radio-button-container">
            Ja
            <input
              id="SatisfactionYes"
              type="radio"
              value="Ja"
              name="radio"
              onChange={onSatisfactionInputChange}
              checked={satisfactionInput === "Ja"}
            />
            <span className="radio-button"></span>
          </label>
          <label htmlFor="SatisfactionNo" className="radio-button-container">
            Nej
            <input
              id="SatisfactionNo"
              type="radio"
              value="Nej"
              name="radio"
              onChange={onSatisfactionInputChange}
              checked={satisfactionInput === "Nej"}
            />
            <span className="radio-button"></span>
          </label>
        </div>
        <button type="submit">Nästa</button>
      </form>
    </>
  );
};
export default FourthQuestion;

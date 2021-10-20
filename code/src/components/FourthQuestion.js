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
          <label htmlFor="SatisfactionYes" className="margin">
            Ja
            <input
              id="SatisfactionYes"
              type="radio"
              value="Ja"
              onChange={onSatisfactionInputChange}
              checked={satisfactionInput === "Ja"}
            />
          </label>
          <label htmlFor="SatisfactionNo" className="margin">
            Nej
            <input
              id="SatisfactionNo"
              type="radio"
              value="Nej"
              onChange={onSatisfactionInputChange}
              checked={satisfactionInput === "Nej"}
            />
          </label>
        </div>
        <button type="submit">Nästa</button>
      </form>
    </>
  );
};
export default FourthQuestion;

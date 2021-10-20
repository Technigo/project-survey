import React from "react";

export const FourthQuestion = ({
  satisfactionInput,
  onSatisfactionInputChange,
  onStepChange,
}) => {
  return (
    <form onSubmit={onStepChange}>
      <h2> Är du nöjd med utdeling av din post?</h2>
      <div>
        <label htmlFor="SatisfactionYes">
          Ja
          <input
            id="SatisfactionYes"
            type="radio"
            value="Ja"
            onChange={onSatisfactionInputChange}
            checked={satisfactionInput === "Ja"}
          />
        </label>
        <label htmlFor="SatisfactionNo">
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
  );
};
export default FourthQuestion;

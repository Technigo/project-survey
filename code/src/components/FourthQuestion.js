import React, { useState } from "react";

export const FourthQuestion = ({
  satisfactionInput,
  onSatisfactionInputChange,
  onStepChange,
}) => {
  return (
    <form>
      Är du nöjd med din utdeling av post?
      <div>
        <label>
          <input
            type="radio"
            value="Ja"
            onChange={onSatisfactionInputChange}
            checked={satisfactionInput === "Ja"}
          />
          Ja
        </label>
        <label>
          <input
            type="radio"
            value="Nej"
            onChange={onSatisfactionInputChange}
            checked={satisfactionInput === "Nej"}
          />
          Nej
        </label>
      </div>
      <button onClick={onStepChange}>Nästa</button>
    </form>
  );
};

export default FourthQuestion;

import React from "react";

export const QuestionSix = ({ deliveryTime, onDeliveryTimeChange }) => {
  return (
    <form>
      <h1 className="questions-main-heading">Delivery Time</h1>
      <select value={deliveryTime} onChange={(e) => onDeliveryTimeChange(e.target.value)}>
        <option defaultValue={"Prefer not to answer"}>Select most suitable option</option>
        <option value={"Super fast"}>Super fast</option>
        <option value={"Overall decent"}>Overall decent</option>
        <option value={"Good"}>Good</option>
        <option value={"Acceptable"}>Acceptable</option>
        <option value={"Need for improvement"}>Need for improvement</option>
      </select>
    </form>
  );
};

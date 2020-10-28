import React from "react";
import Button from "./Button";

const SecondQuestion = ({
  userGender,
  onGenderChange,
  section,
  setSection,
}) => {
  return (
    <section className="question-section">
      <h2 className="question-heading">Vilket kön tillhör du?</h2>
      <select value={userGender} onChange={(e) => onGenderChange(e)}>
        <option value="">Välj</option>
        <option value="kvinna">Kvinna</option>
        <option value="man">Man</option>
        <option value="annat">Annat</option>
      </select>
      <Button
        disable={onGenderChange === ""}
        btnText="Nästa"
        nextQuestion="thirdQuestion"
        section={section}
        setSection={setSection}
      />
    </section>
  );
};

export default SecondQuestion;

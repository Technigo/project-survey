import React from "react";

const ThirdQuestion = ({ userActivity, onActivityChange }) => {
  return (
    <article className="question-section">
      <h2 className="question-heading">Vilken aktivitet har du deltagit i?</h2>
      <div className="checkboxes activity">
        <label htmlFor="coaching">Måltidscoachning</label>
        <input
          id="coaching"
          type="checkbox"
          checked={userActivity.includes("måltidscoaching")}
          onChange={() => onActivityChange("måltidscoaching")}
        />
        <label htmlFor="telefonfika">Telefonfika</label>
        <input
          id="telefonfika"
          type="checkbox"
          checked={userActivity.includes("fika")}
          onChange={() => onActivityChange("fika")}
        />
        <label htmlFor="course">Digital kurs</label>
        <input
          id="course"
          type="checkbox"
          checked={userActivity.includes("digital kurs")}
          onChange={() => onActivityChange("digital kurs")}
        />
        <label htmlFor="coachTalk">Råd av en coach</label>
        <input
          id="coachTalk"
          type="checkbox"
          checked={userActivity.includes("råd av coach")}
          onChange={() => onActivityChange("råd av coach")}
        />
      </div>
    </article>
  );
};

export default ThirdQuestion;

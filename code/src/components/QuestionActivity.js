import React from "react";
import Button from "./Button";

const QuestionActivity = ({ activity, onActivityChange }) => {
  return (
    <section className="main">
      <div className="label-wrap">
        <label htmlFor="activity-option" className="label">
          What activity are you most looking for on your trip?
        </label>
      </div>
      <form
        className="form"
        name="activity-options"
        value={activity}
        aria-label="Navigate with arrows and then press Enter"
        onChange={onActivityChange}
        required
      >
        <select className="dropdown-select" value={activity}>
          <option className="input" disabled value="">
            Select an option
          </option>
          <option className="input" value="hiking">
            Hiking
          </option>
          <option className="input" value="kayaking">
            Kayaking
          </option>
          <option className="input" value="camping">
            Camping
          </option>
          <option className="input" value="sleeping">
            Sleeping
          </option>
          <option className="input" value="swimming">
            Swimming
          </option>
        </select>
      </form>
      <Button button="Continue" />
    </section>
  );
};

export default QuestionActivity;

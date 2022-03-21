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
          <option className="dropdown-option" disabled value="">
            Select an option
          </option>
          <option className="dropdown-option" value="hiking">
            Hiking
          </option>
          <option className="dropdown-option" value="kayaking">
            Kayaking
          </option>
          <option className="dropdown-option" value="camping">
            Camping
          </option>
          <option className="dropdown-option" value="sleeping">
            Sleeping
          </option>
          <option className="dropdown-option" value="swimming">
            Swimming
          </option>
        </select>
      </form>
      <Button button="Continue" />
    </section>
  );
};

export default QuestionActivity;

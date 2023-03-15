/* eslint-disable */

import React from "react";
import { NextQuestionButton } from "./NextQuestionButton";


const ageGroups = ["0-18", "19-30", "30-60", "60+"];
export const AgeQuestion = ({ ageGroup, onAgeGroupChange }) => {

  return (
    <div className="ageGroupBox">
      <p>Age group:</p>
      <div className="ageBox">
        {ageGroups.map((group) => (
          <label key={group}>
            <input
              type="radio"
              value={group}
              onChange={onAgeGroupChange}
              checked={ageGroup === group}
            />
            {group}
          </label>
        ))}
      </div>
      <NextQuestionButton button="Next" />
    </div>
  );
};
/* eslint-disable */

import React from "react";
import { NextQuestionButton } from "./NextQuestionButton";


const ageGroups = ["0-18", "19-30", "30-60","60+"];
export const AgeQuestion = ({ageGroup,onAgeGroupChange}) => {
  
  return (
    <>
    <div>
      <p>Age group:</p> 
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
      ;
    </div>
    <NextQuestionButton button="NextQuestion" />
    </>
  );
};
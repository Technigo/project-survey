import React from "react";
import PreviousButton from "../buttons-components/PreviousButton";
import CorrectAnswers from "./CorrectAnswers";
import UserAnswers from "./UserAnswers";

const Overview = (props) => {
  return (
    <>
      <div className="flex-boxes">
        <UserAnswers
          name={props.name}
          arrayAnswer={props.arrayAnswer}
          arrayAnswer2={props.arrayAnswer2}
          arrayAnswer3={props.arrayAnswer3}
          trueOrFalse={props.trueOrFalse}
          trueOrFalse2={props.trueOrFalse2}
          trueOrFalse3={props.trueOrFalse3}
        />
        <CorrectAnswers />
      </div>
      <PreviousButton onStepChangeMinus={props.onStepChangeMinus} />
    </>
  );
};
export default Overview;

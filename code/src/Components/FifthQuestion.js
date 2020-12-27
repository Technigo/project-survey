import React from "react";
import { QuestionHeader } from "../lib/FormStyle";
import { RadiobuttonWrapper, RadiobuttonLabel, RadiobuttonInput} from "../lib/RadiobuttonStyle";

const FifthQuestion = ({ userRecommendation, onRecommendationChange }) => {
  return (
    <div>
      <QuestionHeader>
        Skulle du rekommendera aktiviteten till en vän?
      </QuestionHeader>
      <RadiobuttonWrapper>
        <RadiobuttonLabel htmlFor="redanGjort">
          <RadiobuttonInput
            type="radio"
            name="recommendation"
            value="redanGjort"
            checked={userRecommendation === "redanGjort"}
            onChange={onRecommendationChange}
            className="radio-button"
          />
          Redan gjort
        </RadiobuttonLabel>

        <RadiobuttonLabel htmlFor="närJagKan">
          <RadiobuttonInput
            type="radio"
            name="recommendation"
            value="närJagKan"
            checked={userRecommendation === "närJagKan"}
            onChange={onRecommendationChange}
            className="radio-button"
          />
          När jag kan
        </RadiobuttonLabel>

        <RadiobuttonLabel htmlFor="vetInte">
          <RadiobuttonInput
            type="radio"
            name="recommendation"
            value="vetInte"
            onChange={onRecommendationChange}
            checked={userRecommendation === "vetInte"}
            className="radio-button"
          />
          Har inte tänkt på det
        </RadiobuttonLabel>

        <RadiobuttonLabel htmlFor="troligenInte">
          <RadiobuttonInput
            type="radio"
            name="recommendation"
            value="troligenInte"
            checked={userRecommendation === "troligenInte"}
            onChange={onRecommendationChange}
            className="radio-button"
          />
          Tror inte det
        </RadiobuttonLabel>

        <RadiobuttonLabel htmlFor="noWay">
          <RadiobuttonInput
            type="radio"
            name="recommendation"
            value="nej"
            checked={userRecommendation === "nej"}
            onChange={onRecommendationChange}
            className="radio-button"
          />
          Nej, det kommer jag inte göra
        </RadiobuttonLabel>
      </RadiobuttonWrapper>
    </div>
  );
};

export default FifthQuestion;

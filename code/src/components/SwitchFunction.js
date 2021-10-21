import React from "react";
import { QuestionOne } from "./questions/QuestionOne";
import { QuestionTwo } from "./questions/QuestionTwo";
import { QuestionThree } from "./questions/QuestionThree";
import { QuestionFour } from "./questions/QuestionFour";
import { QuestionFive } from "./questions/QuestionFive";
import { QuestionSix } from "./questions/QuestionSix";
import { QuestionSeven } from "./questions/QuestionSeven";
import { QuestionEight } from "./QuestionEight";
import { QuestionNine } from "./questions/QuestionNine";
import { AnySuggestion } from "./questions/AnySuggestion";
import { QuestionTen } from "./questions/QuestionTen";

export const SwitchFunction = ({ currentStep, rootState, setValueInRootState }) => {
  if (currentStep === "questionOne") {
    return <QuestionOne />;
  }
  if (currentStep === "questionTwo") {
    return <QuestionTwo design={rootState.design} onDesignRatioChange={(ratio) => setValueInRootState("design", ratio)} />;
  }
  if (currentStep === "questionThree") {
    return <QuestionThree variety={rootState.variety} onVarietyChange={(ratio) => setValueInRootState("variety", ratio)} />;
  }
  if (currentStep === "questionFour") {
    return <QuestionFour quality={rootState.quality} onQualityChange={(evaluation) => setValueInRootState("quality", evaluation)} />;
  }
  if (currentStep === "questionFive") {
    return <QuestionFive />;
  }
  if (currentStep === "questionSix") {
    return <QuestionSix deliveryTime={rootState.deliveryTime} onDeliveryTimeChange={(time) => setValueInRootState("deliveryTime", time)} />;
  }
  if (currentStep === "questionSeven") {
    return <QuestionSeven friendliness={rootState.friendliness} onFriendlinessChange={(range) => setValueInRootState("friendliness", range)} />;
  }
  if (currentStep === "questionEight") {
    return (
      <QuestionEight
        features={rootState.features}
        featuresOthers={rootState.featuresOthers}
        onFeaturesChange={(values) => setValueInRootState("features", values)}
        onFeaturesOthersChange={(input) => setValueInRootState("featuresOthers", input)}
      />
    );
  }
  if (currentStep === "questionNine") {
    return <QuestionNine rating={rootState.rating} onRatingChange={(value) => setValueInRootState("rating", value)} />;
  }
  if (currentStep === "anySuggestion") {
    return (
      <AnySuggestion suggestionInput={rootState.suggestionInput} onSuggestionInputChange={(suggestion) => setValueInRootState("suggestionInput", suggestion)} />
    );
  }
  if (currentStep === "questionTen") {
    return (
      <QuestionTen
        name={rootState.name}
        email={rootState.email}
        percent={rootState.rating >= 6 ? 20 : 25}
        onNameChange={(name) => {
          setValueInRootState("name", name);
          setValueInRootState("nameInvalid", false);
        }}
        onEmailChange={(email) => {
          setValueInRootState("email", email);
          setValueInRootState("emailInvalid", false);
        }}
        nameInvalid={rootState.nameInvalid}
        emailInvalid={rootState.emailInvalid}
      />
    );
  }
};

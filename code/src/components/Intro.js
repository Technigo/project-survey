/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import AgeQuestion from './AgeQuestion';
import GenderQuestion from './GenderQuestion';

const Intro = ({ gender, setGender, ageGroup, setAgeGroup, onStepChange }) => {
  return (
    <div className="introDiv">
      <h1>Welcome to the product research survey</h1>
      <p>here will go some text about knitting. fekfbsebfsladbvnd
        vjjsddbvjrsv  sdwdn sdjbwwd als nhasbq ffnkbawhawf eaednkabdkdab
      </p>
      <p>please answer some questions</p>
      <button type="button" onClick={() => onStepChange(true)}>Lets start!</button>
      <AgeQuestion ageGroup={ageGroup} setAgeGroup={setAgeGroup} />
      <GenderQuestion gender={gender} setGender={setGender} />
      <button className="continue-btn" type="button" onClick={() => onStepChange(true)}>Next question</button>
    </div>
  );
};

export default Intro

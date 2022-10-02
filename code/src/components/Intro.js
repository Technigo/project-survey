/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import AgeQuestion from './AgeQuestion';
import GenderQuestion from './GenderQuestion';

const Intro = ({ gender, setGender, ageGroup, setAgeGroup, step, onStepChange }) => {
  return (
    <div className="introDiv">
      <h1>Welcome to the product research survey</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry&aposs
        standard dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book.
            // eslint-disable-next-line max-len
            It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
      </p>
      <p>please answer some questions</p>
      <button type="button" onClick={() => onStepChange(true)}>Lets start!</button>
      {/*       <button type="button" onClick={() =>
onStepChange(false)}>Go back to the beginning</button>
 */}
      <p>Current Step: {step}/7</p>
      <AgeQuestion ageGroup={ageGroup} setAgeGroup={setAgeGroup} />
      <GenderQuestion gender={gender} setGender={setGender} />
      <button className="continue-btn" type="button" onClick={() => onStepChange(true)}>Next question</button>
    </div>
  );
};

export default Intro

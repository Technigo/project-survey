/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import AgeQuestion from './AgeQuestion';
import GenderQuestion from './GenderQuestion';

const Intro = ({ gender, setGender, ageGroup, setAgeGroup, onStepChange }) => {
  return (
    <div className="introDiv">
      <h1>Welcome to the Knitgren product research survey</h1>
      <p>My name is Mia Dahlgren and I am the owner of the
        instagram account <a href="https://www.instagram.com/knitgren">Knitgren.</a> The instagram account (which was started as a result
         of some months in covid lockdown)
        is a place where I share my latest knitting creations.
        The account started with just me sharing items I had created for friends and family but is
        quickly growing into more and more people wanting to order knitted items.
        I have created this survey to find out what my potential future customers would like to buy
        and what price they are willing to pay for different hand knitted pieces.
      </p>
      <p>Please answer some questions and you will get <span className="span1">10% off</span> your next order!</p>
      <h3>Let&apos;s start!</h3>
      <AgeQuestion ageGroup={ageGroup} setAgeGroup={setAgeGroup} />
      <GenderQuestion gender={gender} setGender={setGender} />
      <button className="button-3" type="button" onClick={() => onStepChange(true)}>Next question</button>
    </div>
  );
};

export default Intro

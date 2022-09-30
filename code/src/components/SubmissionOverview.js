import React from 'react';

const SubmissionOverview = ({ userName, valuedTrait, strongestEmotion, contentLevel, checked }) => {
  return (
    <>
      <p>Hi {userName}!</p>
      <p>You stated that you {checked} had unexplainable things happening to you
        when you where angry or scared
      </p>
      <p>Your most valued trait is: {valuedTrait}.</p>
      <p>The strongest emotion was one of {strongestEmotion}.</p>
      <p>On a scale of 1 - 10 you think you are this likely to be acceptet to
        Hogwarts Community College: {contentLevel}.
      </p>
    </>
  )
}

export default SubmissionOverview;
import React from 'react';

const SubmissionOverview = ({ userName, valuedTrait, strongestEmotion, likelihood }) => {
  return (
    <div className="submission-form" aria-label="summary">
      <h2>{userName},</h2>
      <p>Your most valued trait is: {valuedTrait}.</p>
      <p>The strongest emotion was one of {strongestEmotion}.</p>
      <p>On a scale of 1 - 10 you think you are this likely to be acceptet to
        Hogwarts Community College: {likelihood}.
      </p>
      <p className="information">This summary has magically been sent to H.C.C. education administration via owl.
        If you are accepted to tryouts, you will receive an invitation letter and a ticket
        to the H.C.C. Express.
      </p>
    </div>
  )
}

export default SubmissionOverview;
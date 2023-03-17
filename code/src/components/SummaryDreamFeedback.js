import React from 'react';
import './SummaryDreamFeedback.css';

export const SummaryDreamFeedback = ({ name, yourMonster, famousPerson, yourTimeChoice, yourLove }) => {
  return (
    <>
      <h2 className="summary-title">Thank you for your feedback {name}!</h2>
      <p className="summary-text">According to your answers, your favorite monster is a {yourMonster}. You would like to meet {famousPerson}. In your non-fiction dreams you prefer to dream about your {yourTimeChoice} and what you love the most is {yourLove}. I will try to implement these preferences in the future as much as possible but dreams and nightmares are not fully controllable, not even for me.</p>
      <p className="signature">See you in never-never land!</p>
      <p className="signature">Yours truly, Sandman</p>
    </>
  );
}
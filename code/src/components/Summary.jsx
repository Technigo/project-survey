import React from 'react'

export const Summary = ({ backFront, loneTeam, learnKnow }) => {
  const message1 = 'I\'m a frontend developer';

  const message2 = 'Even though I\'d love to deeper my knowledge in backend development I don\'t think I\'m the right fit for you right now. But if you\'re still interested:';

  const handleSummary = () => {
    if (backFront === 'backend' && loneTeam === 'team' && learnKnow === 'learn') {
      return message1;
    }
    if (backFront === 'frontend' && loneTeam === 'team' && learnKnow === 'learn') {
      return message1;
    }
    if (backFront === 'frontend' && loneTeam === 'team' && learnKnow === 'know') {
      return message1;
    }
    if (backFront === 'frontend' && loneTeam === 'lone' && learnKnow === 'learn') {
      return message1;
    }
    if (backFront === 'backend' && loneTeam === 'team' && learnKnow === 'know') {
      return message2;
    }
    if (backFront === 'backend' && loneTeam === 'lone' && learnKnow === 'know') {
      return message2;
    }
    if (backFront === 'backend' && loneTeam === 'lone' && learnKnow === 'learn') {
      return message2;
    }
    if (backFront === 'frontend' && loneTeam === 'lone' && learnKnow === 'know') {
      return message2;
    }
  }

  return (

    <div className="summary-container">
      {' '}
      <h3>Hi! My name is Fredrik.</h3>
      <p>First of all, thank you for taking the survey!</p>
      <p>I made it with React.js as an assigment during</p>
      <p>Technigo Web Development Boot Camp.</p>
      <p>{handleSummary()}</p>
      <p>Feel free to checkout my portfolio and/or contact me on Linkedin!</p>
    </div>
  );
}
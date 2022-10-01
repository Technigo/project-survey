import React from 'react'

export const Summary = ({ backFront, loneTeam, learnKnow }) => {
  const message1 = 'Fantastic! Then I really think you should:'
  const message2 = 'Well, I am primarily a frontend developer and even though I love broadening my knowledge in development I don\'t think I\'m the right fit for you right now. But if you\'re still interested:';
  const message3 = 'Interesting! I\'m primarily a frontend developer, but I\'m always open for broadening my development knowledge. Please, feel free to:';

  const handleSummary = () => {
    if (backFront === 'frontend' && learnKnow === 'knows everything already') {
      return message2;
    } else if (backFront === 'frontend') {
      return message1;
    }
    if (backFront === 'backend' && loneTeam === 'team' && learnKnow === 'learn') {
      return message3;
    } else if (backFront === 'backend') {
      return message2;
    }

    if (backFront === 'fullstack' && loneTeam === 'team' && learnKnow === 'learn') {
      return message3;
    } else if (backFront === 'fullstack') {
      return message2;
    }
  };

  return (
    <div className="survey-content-container">
      <h4 className="main-heading">Hello there 👋</h4>
      <p className="sub-heading">First of all, thank you for taking the survey!</p>

      <p className="summary-text">I&apos;m a developer named Fredrik. I did this survey as my second react.js project ever.</p>
      <p className="summary-text">So... you&apos;re looking for a {backFront} developer
      who consider themself a {loneTeam} and {learnKnow}?
      </p>
      <p className="summary-text">{handleSummary()}</p>
      <div className="checkout-text-container">
        <p>Checkout my <a href="https://fredrikholm.netlify.com">portfolio</a></p>
        <p>and/or contact me on <a href="https://www.linkedin.com/in/fredrik-holm-10406b106/">Linkedin</a></p>
      </div>
    </div>
  )
};
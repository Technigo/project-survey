import React from 'react';

const Header = ({ questionNumber }) => {
  return (
    <div className="neon-text">
      <h1>Cat Survey</h1>
      {questionNumber <= 3 && <h2>Question number: {questionNumber}/3</h2>}
    </div>
  );
}

export default Header;

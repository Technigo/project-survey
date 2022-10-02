import React from 'react';

export const Result = ({ name, sandwich, pancakes, drink, rate }) => {
  return (
    <div className="outerWrapper">
      <div className="questionContainer">
        <img className="questionImage" alt="thank you note" src="https://images.unsplash.com/photo-1521685468847-de0a1a3c41a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80" />
        <div className="resultContainer">
          <p>Thank you, <span className="input">{name}!</span> this is your breakfast of choice:</p>
          <p>You are having <span className="input">{sandwich}</span> and fluffy pancakes with <span className="input">{pancakes}</span>.</p>
          <p>  With your {'\n'} breakfast you drink <span className="input">{drink}</span>.</p>
          <p> On a scale from 1 to 10, you love breakfast this much: <span className="input">{rate}/10.</span> </p>
        </div>
      </div>
    </div>
  );
}


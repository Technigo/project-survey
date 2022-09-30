import React from 'react';

const Summary = ({
  nameInput,
  selectInput,
  radioInput
}) => {
  if (selectInput === 'Red') {
    document.body.style.backgroundColor = '#a02631';
    document.body.style.color = '#f2f0ea';
  } else if (selectInput === 'Orange') {
    document.body.style.backgroundColor = '#e57151';
    document.body.style.color = '#f2f0ea';
  } else if (selectInput === 'Yellow') {
    document.body.style.backgroundColor = '#f09937';
    document.body.style.color = '#f2f0ea';
  } else if (selectInput === 'Green') {
    document.body.style.backgroundColor = '#3f8354';
    document.body.style.color = '#f2f0ea';
  } else if (selectInput === 'Blue') {
    document.body.style.backgroundColor = '#2637a0';
    document.body.style.color = '#f2f0ea';
  } else if (selectInput === 'Purple') {
    document.body.style.backgroundColor = '#582035';
    document.body.style.color = '#a02631';
  } else if (selectInput === 'Pink') {
    document.body.style.backgroundColor = '#ea9dcb';
    document.body.style.color = '#f2f0ea';
  } else if (selectInput === 'Beige') {
    document.body.style.backgroundColor = '#b3a185';
    document.body.style.color = '#582035';
  } else if (selectInput === 'Brown') {
    document.body.style.backgroundColor = '#a5895c';
    document.body.style.color = '#f2f0ea';
  } else if (selectInput === 'Grey') {
    document.body.style.backgroundColor = '#7d7c7c';
    document.body.style.color = '#f09937';
  } else if (selectInput === 'Black') {
    document.body.style.backgroundColor = '#121111';
    document.body.style.color = '#f2f0ea';
  } else if (selectInput === 'White') {
    document.body.style.backgroundColor = '#f2f0ea';
    document.body.style.color = '#dc4e60';
  }

  return (
    <div>
      <div className="greeting"><h3>{radioInput}, {nameInput}!</h3></div>
    </div>
  )
};

export default Summary;
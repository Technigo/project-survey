import React from 'react';

const Summary = (props) => {
  //One way data-binding
  const handleNameChange = (event) => {
    props.setName(event.target.value);
  };

  return (
    <article className="summary question__wrapper">
      <p>Name: {props.name}</p>
      <p>Age: {props.ageGroup}</p>
      <p>Skills needed: {props.skills}</p>
      <p>Suggestions: {props.suggestions}</p>
      <p>Title: {props.title}</p>
    </article>
  );
};
export default Summary;

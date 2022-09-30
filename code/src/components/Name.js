import React from 'react';



const Name = ({ name, setName, tabIndex }) => {
  const tabIndex = useTabIndex();
  const onStepChange = (event) => {
    setName(event.target.value);
  }
  return (
    <div className="container">
      <h1 className="homeText"> Icebreaker meeting environment survey</h1>
      <p className="survey-goal">Our main goal in this company is to get everyone in the right mood because of our tense meetings and busy work days.</p>
      <p className="survey-goal">So today we decide to send you this survey and hopefully with your answers we would manage to make our work enviornment better for you.</p>
      <p className="question">What is your name?</p>
      <p className="text">(You can answer the questions anonymously!)</p>
      <input className="inputBox" type="text" tabIndex={tabIndex} value={name} onChange={onStepChange} />
    </div>
  );
}

export default Name;
import React, { useState}  from 'react';
import Header from 'Components/Header';
import UserName from 'Components/UserName';
import Transportation from 'Components/Transportation';
import Active from 'Components/Active';
import Temperature from 'Components/Temperature';
import Summary from 'Components/Summary';


export const App = () => {
  const [counter, setCounter] = useState(1); //Counts questions
  const [userName, setUserName] = useState(''); // 1 question UserName
  const [transportation, setTransportation] = useState(''); // 2 question Transportation
  const [active, setActive] = useState(''); // 3 question Active
  const [temperature, setTemperature] = useState(''); // 4 question Temperature

  const handleNextQuestionClick = () => {
    setCounter(counter + 1);
  };

  const handlePreviousQuestionClick = () => {
    setCounter(counter - 1);
    };

  const handleStartOverClick = () => {
    location.reload()
  };
  
  return (
    <div>
      <main>
<Header/>

{counter === 1 && (
    <UserName 
    userName={userName} 
    setUserName={setUserName}
    counter={counter}
    handleNextQuestionClick={handleNextQuestionClick}
    />
    )}

{counter === 2 && (
    <Transportation 
    transportation={transportation} 
    setTransportation={setTransportation}
    counter={counter}
    handleNextQuestionClick={handleNextQuestionClick}
    handlePreviousQuestionClick={handlePreviousQuestionClick}
    />
    )}

{counter === 3 && (
    <Temperature 
    temperature={temperature}
    setTemperature={setTemperature}
    counter={counter}
    handleNextQuestionClick={handleNextQuestionClick}
    handlePreviousQuestionClick={handlePreviousQuestionClick}
    />
    )}

{counter === 4 && (
    <Active 
    active={active} 
    setActive={setActive}
    counter={counter}
    handleNextQuestionClick={handleNextQuestionClick}
    handlePreviousQuestionClick={handlePreviousQuestionClick}
    />
    )}

{ counter === 5 && (
    <Summary 
    userName={userName}
    transportation={transportation}
    active={active}
    temperature={temperature}
    handleStartOverClick={handleStartOverClick}
    />
    )}
    </main>
    </div> 
  );
}



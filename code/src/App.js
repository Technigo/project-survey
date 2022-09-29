import React, { useState}  from 'react';

import Header from 'Components/Header';
import UserName from 'Components/UserName';
import Transportation from 'Components/Transportation';
import Active from 'Components/Active';
import Temperature from 'Components/Temperature';
import { Summary } from 'Components/Summary';
// import Counter from 'Components/Counter';

export const App = () => {
  const [counter, setCounter] = useState(1); //Counts questions
  const [userName, setUserName] = useState(''); // 1 question UserName
  const [transportation, setTransportation] = useState(''); // 2 question Transportation
  const [active, setActive] = useState(''); // 3 question Active
  const [temperature, setTemperature] = useState(''); // 4 question Temperature


  const handleCounterButtonClick = (shouldIncrease) => {  //Counts questions
    if (shouldIncrease && counter < 5) {
    setCounter(counter+1)
  } else if(!shouldIncrease && counter > 1) {
    setCounter(counter-1)
  }
  }

  const handleClearButtonClick =() => {
    setUserInput('')
  }
 
  return (
    <div>
      <main>
<Header />

{counter === 1 && (
    <UserName 
    userName={userName} 
    setUserName={setUserName}/>
    )}

{counter === 2 && (
    <Transportation 
    transportation={transportation} 
    setTransportation={setTransportation}/>
    )}

{counter === 3 && (
    <Temperature 
    temperature={temperature}
    setTemperature={setTemperature}/>
    )}

{counter === 4 && (
    <Active 
    active={active} 
    setActive={setActive}/>
    )}

{ counter === 5 && (
    <Summary 
    userName={userName}
    transportation={transportation}
    active={active}
    temperature={temperature}
    />
    )}

{/* Counter */}
{ counter === 1 && (
        <>
        <section className='buttonWrapper'>
        <button 
        className="firstButton"
        type="button" 
        onClick={() => handleCounterButtonClick(true)}>
        Next ▷ </button>
        

        <div className='questionNumber'>
        Question number {counter} /5
        </div>

        </section>
        </>
      )}

{ counter > 1 && (
        <>
        <section className='buttonWrapper'>
        <button 
        type="button" 
        onClick={() => handleCounterButtonClick(false)}>
        ◀︎ Back </button>
        
        <button 
        type="button" 
        onClick={() => handleCounterButtonClick(true)}>
        Next ▶︎</button>
        
        <div className='questionNumber'>
        Question number {counter} /5
        </div>
        </section>
        </>
      )}

{ counter === 5 && (
        <>
        <section className='buttonWrapper'>
        <button 
        type="button" 
        onClick={()=> setCounter(1)}
        >
        START OVER </button>
        </section>
        </>
      )}
    </main>
    </div> 
  );
  
   


  


}



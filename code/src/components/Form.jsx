import React, { useState } from 'react';
import DaysOffice from './DaysOffice';
import Experience from './Experience';
import BestThing from './BestThing';
import Summary from './Summary';

const Form = () => {
  // page state handler
  const [page, setPage] = useState(1)
  const nextPage = (event) => {
    setPage(page + 1);
    event.preventDefault();
  }
  const previousPage = (event) => {
    setPage(page - 1);
    event.preventDefault();
  }
  const startOver = (event) => {
    setPage(1);
    event.preventDefault();
  }

  //Experience state handling. 
  const [experience, setExperience] = useState('office only');

  const onExperienceChanged = (event) => {
    setExperience(event.target.value);
  }

  //Days at office state handling
  const [days, setDays] = useState('one');
  const onDayChanged = (event) => {
    setDays(event.target.value);
  }

  //Best thing working from home state handling
  const [best, setBest] = useState('');
  const onBestChanged = (event) => {
    setBest(event);
  }

  const onSubmit = () => {
    setPage(4);

  }
  //The four pages in the form consists of three question components and a summary components. Buttons for each page collected. 
  return (
    <form>
      {page === 1 && (
        <Experience experienceInput={experience} experienceChoosen={onExperienceChanged}></Experience>
      )}

      {page === 2 && (
        <DaysOffice chosenDay={days} onDayChosen={onDayChanged}></DaysOffice>
      )}

      {page === 3 && (
        <BestThing bestChosen={onBestChanged}></BestThing>
      )}
      {page === 4 && (
        <Summary experienceChoice={experience} chosenDay={days} bestChosen={best}></Summary>
      )}
      
      {page > 1 && (
        <button className='button' onClick={previousPage}>Previous page</button>
      )}
      {page < 3 && (
        <button className='button float-right' onClick={nextPage}>Next page</button>
      )}
      {page === 3 && (
        <button className='button-submit float-right' type='submit' onClick={onSubmit}>Submit</button>
      )}
      {page === 4 && (
        <button className='button-restart float-right' type='submit' onClick={startOver}>Restart</button>
      )}

    </form>
  );
};
export default Form

//to prevent the default behaviour with rerendering of page when typed  and hit enter:
//<form onSubmit={(event) => event.preventDefault ()}
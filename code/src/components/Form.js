import React, {useState} from 'react';
import DaysOffice from './DaysOffice';
import Experience from './Experience';
import BestThing from './BestThing';
//import Summary from './Summary';

 const Form = () => {
  const [page, setPage] = useState(1)
  const nextPage = (event) => {
    setPage(page + 1);
    event.preventDefault();
  }
  const previousPage = (event) => {
    setPage(page -1);
    event.preventDefault();
  }

   //Experience
  const [experience, setExperience] = useState('');

  const onExperienceChanged = (event) => {
    setExperience(event.target.value);
  }

  //Days
  const [days, setDays] = useState('');
  const onDayChanged = (event) => {
    setDays(event.target.value);
  }

  //Best thing
  const [best, setBest] = useState('');
  const onBestChanged = (event) => {
   setBest(event);
  }

  const onSubmit = () => {
    let bestThing = best;
    let daysChosen = days;
    let chosenExperience = experience;
    // submit to wherever it should be submitted
  }

  return (
    <form>
      {page === 1 && (
        <Experience experienceInput={experience} experienceChoosen={onExperienceChanged}></Experience>
      )}

      {page === 2 && (
      <DaysOffice chosenDay={days} onDayChosen={onDayChanged}></DaysOffice>
      )}

      {page === 3 && (
      <BestThing bestInput={best} bestChosen={onBestChanged}></BestThing>
      
      )}
      {page === 3 && (
      <button className='button float-right' type='submit'onClick = {onSubmit}>SUBMIT</button>
      )}

{page >1 && (
<button className='button'onClick = {previousPage}>Previous Page</button>
)}
{page <3 && (
<button className='button'onClick = {nextPage}>Next Page</button>
)}
    </form>
  );
};
export default Form
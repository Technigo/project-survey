import React, {useState} from 'react';
import DaysOffice from './DaysOffice';
import Experience from './Experience';
import BestThing from './BestThing';
//import Summary from './Summary';

 const Form = () => {
  const [experience, setExperience] = useState('');
  const onExperienceChanged = (event) => {
    setExperience(event.target.value);
  }

  const [days, setDays] = useState('');
  const onDayChanged = (event) => {
    setDays(event.target.value);
  }
  
  const [best, setBest] = useState('');
  const onBestChanged = (event) => {
   setBest(event);
  }
  const onSubmit = () => {
    let bestThing = best;
    let daysChosen = days;
    let chosenExperience = experience;
  }

  return (
    <form>
      <DaysOffice chosenDay={days} onDayChosen={onDayChanged}></DaysOffice>
      <Experience experienceInput={experience} experienceChoosen={onExperienceChanged}></Experience>
      <BestThing bestInput={best} bestChosen={onBestChanged}></BestThing>
      <button className='button'onClick = {onSubmit}>SUBMIT</button>
    </form>
  );
};
export default Form
import React, { useState } from "react";


const Form = () => {
  const [displaySummary, setDisplaySummary] = useState(false);
  const [genre, setGenre] = useState('');
  const [time, setTime] = useState('');
  const [experience, setExperience] = useState('');


const handleSubmit = (e) => {
  e.preventdefault()
  setDisplaySummary(true)
}

const onGenreChange = (e) => {
  setGenre(e.target.value);
}

const onTimeChange = (e) => {
  setTime(e.target.value);
}

const onExperienceChange = (e) => {
  setExperience(e.target.value);
}

const isSurveyComplete = () => {
  if(time === ''){
    return false;
  }
  if(genre === ''){
    return false;
  }
  if(experience === ''){
  return false;
  }

  return true; 
}
  return (
    <form onSubmit= {handleSubmit} className="form">
      <p><b>What kind of job are you looking for?</b></p>
      <div className="time-container">
        <label htmlFor="full">Full time</label>
        <input name="time" id="full" value="fulltime" type="radio" onChange={onTimeChange} />
        <label htmlFor="part">Part time</label>
        <input name="time" id="part" value="parttime" type="radio" onChange={onTimeChange} />
        <label htmlFor="project">Temporary project</label>
        <input name="time" id="temporary" value="temporary" type="radio" onChange={onTimeChange} />
      </div>

      <div className="genre-container">
        <label htmlFor="genre">
         <b> Within which genre would you like to find a job?</b>
        </label>
        <select id="genre" onChange={onGenreChange} value={genre}>
          <option disabled></option>
          <option>Frontend development</option>

          <option>Backend development</option>

          <option>Fullstack development</option>

          <option>Content writing</option>

          <option>Translation</option>

          <option>Customer service</option>

          <option>Sales</option>
        </select>
      </div>
      <p>
       <b>What is your level of experience?</b> 
      </p>
      <div className="experience">
        <label htmlFor="educating">Under education</label>
        <input name="experience" id="education" value="education" type="radio" onChange={onExperienceChange} />
        <label htmlFor="junior">Junior</label>
        <input name="experience" id="junior" value="junior" type="radio" onChange={onExperienceChange}/>
        <label htmlFor="senior">Senior</label>
        <input name="experience" id="senior" value="senior" type="radio" onChange={onExperienceChange} />
      </div>
      <div className="button-container">
          <button className="button" type="submit">Submit</button>
      </div>
    </form>
  );
};
export default Form;

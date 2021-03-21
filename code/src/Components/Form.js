import React, { useState } from "react";



const Form = () => {
  const [genre, setGenre] = useState('');
  const [time, setTime] = useState('');
  const [experience, setExperience] = useState('');
  const [surveyComplete, setSurveyComplete] = useState(false);

  const timeChoice = ['Full time', 'Part time', 'Temporary project']
  const experienceChoice = ['Under education', 'Junior', 'Senior']

  const isSurveyComplete = () => {
    if(time !== '' && genre !== '' && experience !== '' ){
        return true;
     }
    return false; 
  }

  const handleSubmit = (event) => {
    event.preventDefault() 
    
    if (isSurveyComplete()) {
      setSurveyComplete(true)
    } else {
      alert("Please choose options for each question")
    }
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

if (surveyComplete) {
  return (
    <div className="form">
      <p>Thank you for filling out this survey.</p>
      <div className="circle-1"></div>
      <p>We have noticed that you are looking for a {time} position, within the {genre} genre which accepts applications from people with {experience} experience. We will process your request.</p> 
    </div>
    
  )
 
} else {

  return (    
  
    <form className="form" onSubmit={handleSubmit}>
      <p tabIndex="0"><b>What kind of job are you looking for?</b></p>
      <div className="time-container">
      {timeChoice.map((time) => (
           <label key={time} htmlFor={time}>
           <input 
             id={time}
             name="time" 
             type="radio" 
             value={time} 
             required
             onChange={onTimeChange}
             >
           </input>
           {time} 
           </label>
          ))}
      </div>

      <div className="genre-container">
        <label tabIndex="0" htmlFor="genre">
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
      <p tabIndex="0">
       <b>What is your level of experience?</b> 
      </p>
      <div className="experience">
      {experienceChoice.map((experience) => (
           <label key={experience} htmlFor={experience}>
           <input 
             id={experience}
             name="experience" 
             type="radio" 
             value={experience} 
             required
             onChange={onExperienceChange}
             >
           </input>
           {experience} 
           </label>
          ))}
      </div>
      <div className="button-container">
          <button className="button" type="submit">Submit</button>
      </div>
    </form>
    
  ); 
}
}; export default Form;

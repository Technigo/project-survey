import React, {useState} from 'react';

const experiences = ["Both office and remote", "Only Office", "Only Remote"];

 const Form = () => {
    const [experience, setExperience] = useState('');
    
  return (
    <form>
      What kind of experience do you have from working remotely?
      {experiences.map((group => (
        <label key={group}>
          <input
            type="radio"
            value={group}
            onChange={(event) => setExperience(event.target.value)}
            checked={experience === group}
          />
          {group}
        </label>
      )))}
    </form>
  );
};
export default Form
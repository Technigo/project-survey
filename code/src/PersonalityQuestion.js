import React from 'react'

const PersonalityQuestion = (props) => {
  const {personality, setPersonality} = props;
  const onPersonalityChange = (event) => {
    console.log(`Personality: ${event.target.value}`);
    setPersonality(event.target.value);
  };
  
  return (
    <>
    <label for="personality-select" className="personality-label">My Style is:</label>
    <select 
    id="personality-select" 
    className="select-menu"
    onChange={onPersonalityChange}
    value={personality}
    >
      <option className="option" value="">--Please choose an option--</option>
      <option className="option" value="cute">Cute</option>
      <option className="option" value="brave">Brave</option>
      <option className="option" value="romantic">Romantic</option>
      <option className="option" value="quirky">Quirky</option>
      <option className="option" value="robot">Robot</option>
      <option className="option" value="scary">Scary</option>
      
    </select>

    </>

  )
}

export default PersonalityQuestion;

/*Google fonts
cute = Hachi Maru Pop
brave = Meddon
romantic = Alex Brush
quirky = Ranchers
robot = Syne Mono
scary = Ravi Prakash

*/
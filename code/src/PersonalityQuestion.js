import React from 'react'

const PersonalityQuestion = (props) => {
  const {personality, setPersonality} = props;
  const onPersonalityChange = (event) => {
    console.log(`Personality: ${event.target.value}`);
    setPersonality(event.target.value);
  };
  
  return (
    <>
    <select
    onChange={onPersonalityChange}
    value={personality}
    >
      <option value="">I am:</option>
      <option value="cute">Cute</option>
      <option value="brave">Brave</option>
      <option value="romantic">Romantic</option>
      <option value="quirky">Quirky</option>
      <option value="robot">Robot</option>
      <option value="scary">Scary</option>
      
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
import React, {useState} from 'react'

const PersonalityQuestion = () => {

  const [personality, setPersonality] = useState('');
  return (
    <>
    <select
    onChange={event => setPersonality(event.target.value)}
    value={personality}
    >
      <option value="">I am:</option>
      <option value="cute">Cute</option>
      <option value="brave">Brave</option>
      <option value="romantic">Romantic</option>
      <option value="quirky">Quirky</option>
      <option value="relaxed">Relaxed</option>
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
quirky = Imbue
relaxed = Oi
scary = Ravi Prakash

*/
import React, {useState} from 'react'

import Survey from './Survey'
import Result from './Result'

const App = (props) => {
  const [name, setName] = useState('');
  const [occupation, setOccupation] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [color, setColor] = useState('')
  const [personality, setPersonality] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [completed, setCompleted] = useState(false);

  const isSurveyComplete = () => {
    if (name === '') {
      return false;
    } if (occupation === '') {
      return false;
    } if (email === '') {
      return false;
    } if (telephone === '') {
      return false;
    } if (color === '') {
      return false;
    } if (personality === '') {
      return false;
    } 
    return true
  }; 
  
  console.log({completed});

  return (
    <div className="surveyContainer">
      <h1 className="h1">My Business Card Generator</h1>
      
      {submitted === false &&
      <Survey 
        name={name} 
        setName= {setName} 
        occupation={occupation} 
        setOccupation= {setOccupation} 
        email={email} 
        setEmail= {setEmail} 
        telephone={telephone}
        setTelephone= {setTelephone}
        color={color} 
        setColor={setColor}
        personality={personality}
        setPersonality={setPersonality}
        submitted={submitted}
        setSubmitted={setSubmitted}
        completed={completed}
        setCompleted={setCompleted}
        isSurveyComplete={isSurveyComplete}
      />} {submitted === true &&
      <Result 
      name={name}
      occupation={occupation} 
      email={email} 
      telephone={telephone}
      color={color} 
      personality={personality}
      submitted={submitted}
      />}
    </div>
  )
  }

  
export {App};

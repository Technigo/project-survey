import React, {useState} from 'react';
import { EnergyLevelRadioOption } from './EnergyLevelRadioOption';
import { ClassicalMusicCheckBox } from './ClassicalMusicCheckBox';
import { ComposerSelect } from './ComposerSelect';
import { NameInput } from './NameInput';


const Form = () => {

  const [energy, setEnergy] = useState('');
  const [checkBoxGroup, setCheckBoxGroup] = useState([]);
  const [composer, setComposer] = useState('--- select ---');
  const [name, setName] = useState('');
  const [hideForm, setHideForm] = useState('false');

  const energyLevels= ['1', '2', '3', '4', '5']
  const checkBoxes = ['concert', 'relax', 'concentrate', 'background', 'enjoy']

  const isSurveyComplete = () => {

    if (energy === '') {
      return false;
    }

    if (checkBoxGroup === []) {
      return false;
    }

    if (composer === '--- select ---') {
      return false;
    }

    if (name === '') {
      return false;
    }

    return true;
  };

  const onSubmit = (e) => {
    setHideForm(true);
}

  if (hideForm === true) {
    return (
      <>
      <div className='summary-container'>
        <h2>Thank you for answering, {name}!</h2>
        <div className="summary-wrapper">
          <p>Energy level: {energy}</p>
          <p>When do you enjoy classical music? {checkBoxGroup}</p>
          <p>Selected composer? {composer}</p>
          <p>Based on your answer, we suggest you the following piece:</p>    
      </div> 
      </div>
      </>
    )
  }

    return (
      <form onSubmit = {onSubmit}>
        <h1>Welcome to Classical Music Explorer</h1>
        <h2>Perfect music for this moment</h2>
        <div className='question-wrapper'>
          <h3>On a scale 1 to 5, what is your energy level at the moment?</h3>
          {energyLevels.map((energy) => {
            return (
              <EnergyLevelRadioOption key={energy} energy={energy} setEnergy={setEnergy} />
            )
          })}
        </div>
        <div className='question-wrapper'>
          <h3>When do you enjoy listening classical music?</h3>
          {checkBoxes.map((checkBox) => {
            return (
              <ClassicalMusicCheckBox key={checkBox} checkBox={checkBox} checkBoxGroup={checkBoxGroup} setCheckBoxGroup={setCheckBoxGroup} />
            )
          })} 
        </div>
        <div className='question-wrapper'>
          <ComposerSelect composer={composer} setComposer={setComposer} />
        </div>
        <div className='question-wrapper'>
          <NameInput name={name} setName={setName} />
        </div>
    
        <button type='submit' onClick={(e) => onSubmit()} disabled={!isSurveyComplete()}>Submit answers</button>
      </form>
    )
}

export default Form;
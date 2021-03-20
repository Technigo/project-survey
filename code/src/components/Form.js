import React, {useState} from 'react';
import { EnergyLevelRadioOption } from './EnergyLevelRadioOption';
import { MoodOption } from './MoodOption';
import { ClassicalMusicCheckBox } from './ClassicalMusicCheckBox';
import { ComposerSelect } from './ComposerSelect';
import { NameInput } from './NameInput';


const Form = () => {

  const [energy, setEnergy] = useState('1');
  const [mood, setMood] = useState('')
  const [checkBoxGroup, setCheckBoxGroup] = useState([]);
  const [composer, setComposer] = useState('--- select ---');
  const [name, setName] = useState('');
  const [hideForm, setHideForm] = useState('false');

  const moods = ['exited', 'happy', 'peaceful', 'sad']
  const checkBoxes = [{name: 'concert', text: 'In a concert'}, {name: 'relax', text: 'For relaxation'}, {name: 'concentrate', text: 'For concentration'}, {name:'background', text: 'As background music'}, {name: 'enjoy', text: 'Just for pleasure'}]

  console.log(checkBoxes.find(x => x.name === 'concert').text)
  const isSurveyComplete = () => {
    if (energy === '') {
      return false;
    }

    if (mood === '') {
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
    e.preventDefault()
    if (isSurveyComplete()) {
      setHideForm(true);
    } else {
      alert('Survey is not complete. Please fill in all the questions.')
      window.scroll(0,0)
    }
}

  if (hideForm === true) {
    return (
      <div className='summary-container'>
        <h2>Thank you for answering, {name}!</h2>
        <div className="summary-wrapper">
          <p>Energy level: {energy}</p>
          <p>Mood: {mood}</p>
          <p>When or for what purpose do you enjoy listening classical music? 
            <ul>{checkBoxGroup.map((item) => {
            return (
              <li key={item}>{checkBoxes.find(x => x.name === item).text}</li>
            )})}
            </ul>
          </p>
          <p>Selected composer: {composer}</p>
          <p>Based on your answer, we suggest you the following piece:</p>    
      </div> 
      </div>
    )
  }

    return (
      <form onSubmit = {onSubmit}>
        <div className='form'>
          <h1>Welcome to Classical Music Explorer</h1>
          <h2>Perfect music for this moment</h2>
          <div className='question-wrapper' id='energy'>
            <div className='inner-wrapper'>
              <h3>On a scale 1(low) to 5(high), what is your energy level at the moment?</h3>
              <EnergyLevelRadioOption energy={energy} setEnergy={setEnergy} />
              <button><a href='#mood'>Next</a></button>
            </div>
                
          </div>
          <div className='question-wrapper' id='mood'>
            <div className='inner-wrapper'>
              <h3>What is your mood at the moment?</h3>
              {moods.map((mood) => {
                return (
                  <MoodOption key={mood} mood={mood} setMood={setMood} />
                )
              })}
              <button><a href='#purpose'>Next</a></button>
            </div>
          </div>
          <div className='question-wrapper' id='purpose'>
            <div className='inner-wrapper'>
              <h3>When or for what purpose do you enjoy listening classical music?</h3>
              {checkBoxes.map((checkBox) => {
                return (
                  <ClassicalMusicCheckBox key={checkBox.name} checkBox={checkBox} checkBoxGroup={checkBoxGroup} setCheckBoxGroup={setCheckBoxGroup} />
                )
              })}
              <button><a href='#composer'>Next</a></button>
            </div>
          </div>
          <div className='question-wrapper' id='composer'>
            <ComposerSelect composer={composer} setComposer={setComposer} />
          </div>
          <div className='question-wrapper' id='name'>
            <div className='inner-wrapper'>
              <NameInput name={name} setName={setName} />
            </div>
            <button className='button' type='submit'>Submit answers</button>
          </div>

        </div>
      </form>
    )
}

export default Form;
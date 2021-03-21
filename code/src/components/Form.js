import React, {useState} from 'react';
import { EnergyLevelSlider } from './EnergyLevelSlider';
import { MoodOption } from './MoodOption';
import { ClassicalMusicCheckBox } from './ClassicalMusicCheckBox';
import { ComposerSelect } from './ComposerSelect';
import { NameInput } from './NameInput';
import { Summary } from './Summary';

const Form = () => {

  const [energy, setEnergy] = useState('1');
  const [mood, setMood] = useState('')
  const [checkBoxGroup, setCheckBoxGroup] = useState([]);
  const [composer, setComposer] = useState('--- select ---');
  const [name, setName] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState('false');

  const moods = ['exited', 'happy', 'peaceful', 'sad']
  const checkBoxes = [{name: 'concert', text: 'In a concert'}, {name: 'relax', text: 'For relaxation'}, {name: 'concentrate', text: 'For concentration'}, {name:'background', text: 'As background music'}, {name: 'enjoy', text: 'Just for pleasure'}]

  console.log(currentQuestion)

  const onSubmit = (e) => {
    e.preventDefault()
    if (currentQuestion <= 2) {
      setCurrentQuestion(currentQuestion + 1)
    }
    else if (currentQuestion === 3) {
      checkBoxGroup.length === 0 ? alert('Please select at least one') : setCurrentQuestion(currentQuestion + 1)
    }  
    
    else if (currentQuestion === 4) {
      composer === '--- select ---' ? alert('Please select a composer') : setCurrentQuestion(currentQuestion + 1)
    }
      
   else if (currentQuestion === 5) {
      name === '' ? alert('Please write your name') : setIsSubmitted('true')
    }
  }
 
    return (
      <section className='form-container'>
        {(isSubmitted === 'false') ? (
          <form onSubmit = {onSubmit}>
            {currentQuestion === 1 && (
              <EnergyLevelSlider energy={energy} setEnergy={setEnergy} />
            )}
            {currentQuestion === 2 && (
              <MoodOption mood={mood} setMood={setMood} moods={moods} />
            )}
            {currentQuestion === 3 && (
              <ClassicalMusicCheckBox checkBoxGroup={checkBoxGroup} setCheckBoxGroup={setCheckBoxGroup} checkBoxes={checkBoxes} />
            )}
            {currentQuestion === 4 && (
              <ComposerSelect composer={composer} setComposer={setComposer} />
            )}
            {currentQuestion === 5 && (
              <NameInput name={name} setName={setName} />
            )}
            <button className='button' type='submit'>Next</button>
          </form>
        ): 
          <Summary name={name} energy={energy} mood={mood} composer={composer} checkBoxGroup={checkBoxGroup} checkBoxes={checkBoxes} />
        }
      </section>
    )
}

export default Form;
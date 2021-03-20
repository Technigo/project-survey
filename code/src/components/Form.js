import React, {useState} from 'react';

const Form = () => {

  const [energy, setEnergy] = useState('')
  const [checkBoxGroup, setCheckBoxGroup] = useState([])
  const [composer, setComposer] = useState('--- select ---')
  const [name, setName] = useState('')
  const [hideForm, setHideForm] = useState('false')
  
  const onEnergyChange = (e) => {
    setEnergy(e.target.value)
  }

  // if element is included in the array, it will be deleted from a new array
  // if elemenent is not included in the array, it will be added to a new array together with the existing elements, if any
  const oncheckBoxGroupToggle = (checkBoxValue) => {
    if (checkBoxGroup.includes(checkBoxValue)) {
      setCheckBoxGroup(checkBoxGroup.filter(item => item !== checkBoxValue))
    } else { 
      setCheckBoxGroup([checkBoxValue, ...checkBoxGroup]) 
    }
  }
  
  const onComposerChange = (e) => {
      setComposer(e.target.value)
  }

  const onNameChange = (e) => {
    setName(e.target.value)
  }

  const onSubmit = (e) => {
    if (energy !== '' && checkBoxGroup !== [] && composer !== '--- select ---' && name !== '') {
      setHideForm(true)
    } else {
      alert('You need to fill in all forms')
    }
  }

  if (hideForm === true) {
    return (
      <>
      <h2>Thank you for answering, {name}!</h2>
      <div className="summary-wrapper">
        <p>Energy level: {energy}</p>
        <p>When do you enjoy classical music? {checkBoxGroup}</p>
        <p>Selected composer? {composer}</p>
        <p>Based on your answer, we suggest you the following piece:</p>
            
      </div>  
      </>
    )
  }

    return (
      <>
      <form onSubmit = {onSubmit}>
      
        <div>
          <p>On a scale 1 to 5, what is your energy level at the moment?</p>
          <div>
            <input 
              id='energy1' 
              type='radio'
              name='energy'
              value='1'
              onChange={onEnergyChange}
              required
            />
            <label htmlFor='1'>1 (very low energy)</label>
          </div>
          <div>
            <input 
              id='energy2' 
              type='radio'
              name='energy'
              value='2'
              onChange={onEnergyChange}
              required
            />
            <label htmlFor='energy2'>2 (slighly low energy)</label>
          </div>
          <div>
            <input 
              id='energy3' 
              type='radio'
              name='energy'
              value='3'
              onChange={onEnergyChange}
              required
            />
            <label htmlFor='energy3'>3 (normal energy)</label>
          </div>
          <div>
            <input 
              id='energy4' 
              type='radio'
              name='energy'
              value='4'
              onChange={onEnergyChange} 
              required
            />
            <label htmlFor='energy4'>4 (slightly energetic)</label>
          </div>
          <div>
            <input 
              id='energy5' 
              type='radio'
              name='energy' 
              value='5'
              onChange={onEnergyChange}
              required
            />
            <label htmlFor='energy5'>5 (very energetic)</label>
          </div>
        </div>
        <div>
          <p>When do you enjoy listening classical music?</p>
          <div>
            <input 
              id='check1' 
              type='checkbox' 
              checked= {checkBoxGroup.includes('check1')}
              onChange={() => oncheckBoxGroupToggle('check1')}  
            />
            <label htmlFor='check1'>In a concert.</label>
          </div>
          <div>
            <input 
              id='check2' 
              type='checkbox' 
              checked= {checkBoxGroup.includes('check2')}
              onChange={() => oncheckBoxGroupToggle('check2')}  
            />
            <label htmlFor='check2'>When I want to relax.</label>
          </div>
          <div>
            <input 
              id='check3' 
              type='checkbox' 
              checked= {checkBoxGroup.includes('check3')}
              onChange={() => oncheckBoxGroupToggle('check3')}  
            />
            <label htmlFor='check3'>When I need to concentrate.</label>
          </div>
          <div>
            <input 
              id='check4' 
              type='checkbox' 
              checked= {checkBoxGroup.includes('check4')}
              onChange={() => oncheckBoxGroupToggle('check4')}
            />
            <label htmlFor='check4'>I like to use it as background music.</label>
          </div>
          <div>
            <input 
              id='check5' 
              type='checkbox' 
              checked= {checkBoxGroup.includes('check5')}
              onChange={() => oncheckBoxGroupToggle('check5')}
            />
            <label htmlFor='check4'>I enjoy it just as it is.</label>
          </div>
        </div>
        <div>
          <label htmlFor='composer-select'>Choose a composer from the list you like the most</label>
          <select id='composer-select' value={composer} onChange={onComposerChange} required>
            <option disabled>--- select ---</option>
            <option>Chopin</option>
            <option>Bach</option>
            <option>Beethoven</option>
            <option>Liszt</option>
            <option>Sibelius</option>
            <option>Rachmaninov</option>
          </select>
        </div>
        <div>
          <label htmlFor='name'>What is your name?</label>
          <input id='name' type='text' value={name} onChange={onNameChange} required />
        </div>
        <button type='submit' onClick={(e) => onSubmit()}>Find a suggestion</button>
      </form>
    
      </>
    )
}

export default Form;
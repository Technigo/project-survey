import React, {useState} from 'react';

const Form = () => {

  const [humor, setHumor] = useState('')
  const [checkBoxGroup, setCheckBoxGroup] = useState([])
  const [office, setOffice] = useState('--- select ---')
  const [name, setName] = useState('')
  const [hideForm, setHideForm] = useState('false')
  
  const onHumorChange = (e) => {
    setHumor(e.target.value)
  }

  const oncheckBoxGroupToggle = (checkBoxValue) => {
    if (checkBoxGroup.includes(checkBoxValue)) {
      // deletes an element from array, accepts only items that are different from checkBoxValue
      setCheckBoxGroup(checkBoxGroup.filter(item => item !== checkBoxValue))
    } else { 
      // adds an element into a new array together with the existing ones
      setCheckBoxGroup([checkBoxValue, ...checkBoxGroup]) 
    }
  }
  
  const onOfficeChange = (e) => {
      setOffice(e.target.value)
  }

  const onNameChange = (e) => {
    setName(e.target.value)
  }

  const onSubmit = (e) => {
    setHideForm(true)
  }

  if (hideForm === true) {
    return (
      <>
      <div>Hej {name}! This is the summary of your answers:</div>
      <div>How import is humor in the work place? {humor}</div>
      <div>What is preventing you to use humor?{checkBoxGroup}</div>
      <div>Where do you work? {office}</div>
      </>
    )
  } else {
    return (
      <>
      <form onSubmit = {onSubmit}>
      
        <div>
          <p>On a scale of Ha (1) to Hahahahaha (5), how important is humor in the workplace?</p>
          <div>
            <input 
              id='ha' 
              type='radio'
              name='humor'
              value='ha'
              onChange={onHumorChange}
            />
            <label htmlFor='ha'>Ha</label>
          </div>
          <div>
            <input 
              id='haha' 
              type='radio'
              name='humor'
              value='haha'
              onChange={onHumorChange}
            />
            <label htmlFor='haha'>Haha</label>
          </div>
          <div>
            <input 
              id='hahaha' 
              type='radio'
              name='humor'
              value='hahaha'
              onChange={onHumorChange}
            />
            <label htmlFor='hahaha'>Hahaha</label>
          </div>
          <div>
            <input 
              id='hahahaha' 
              type='radio'
              name='humor'
              value='hahahaha'
              onChange={onHumorChange} 
            />
            <label htmlFor='hahahaha'>Hahahaha</label>
          </div>
          <div>
            <input 
              id='hahahahaha' 
              type='radio'
              name='humor' 
              value='hahahahaha'
              onChange={onHumorChange}
            />
            <label htmlFor='hahahahaha'>Hahahahaha</label>
          </div>
        </div>
        <div>
          <p>What is preventing you from using more humor at work?</p>
          <div>
            <input 
              id='check1' 
              type='checkbox' 
              checked= {checkBoxGroup.includes('check1')}
              onChange={() => oncheckBoxGroupToggle('check1')}  
            />
            <label htmlFor='check1'>I don't know how</label>
          </div>
          <div>
            <input 
              id='check2' 
              type='checkbox' 
              checked= {checkBoxGroup.includes('check2')}
              onChange={() => oncheckBoxGroupToggle('check2')}  
            />
            <label htmlFor='check2'>I don't see its value</label>
          </div>
          <div>
            <input 
              id='check3' 
              type='checkbox' 
              checked= {checkBoxGroup.includes('check3')}
              onChange={() => oncheckBoxGroupToggle('check3')}  
            />
            <label htmlFor='check3'>I don't think its appropriate</label>
          </div>
          <div>
            <input 
              id='check4' 
              type='checkbox' 
              checked= {checkBoxGroup.includes('check4')}
              onChange={() => oncheckBoxGroupToggle('check4')}
              value='i-dunno' 
            />
            <label htmlFor='check4'>Preventing? I use it all the time!</label>
          </div>
        </div>
        <div>
          <label htmlFor='office-select'>Where do you work most of the time?</label>
          <select id='office-select' value={office} onChange={onOfficeChange}>
            <option disabled>--- select ---</option>
            <option>At the office or workplace</option>
            <option>Home</option>
            <option>Other</option>
            <option>It varies</option>
          </select>
        </div>
        <div>
          <label htmlFor='name'>Let us know you little better, what is your name?</label>
          <input id='name' type='text' value={name} onChange={onNameChange} />
        </div>
        
        <button type='submit' onClick={(e) => onSubmit()}>Submit your answers</button>
      </form>
    
      
      </>
    )
  }
}

export default Form;
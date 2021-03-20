import React, {useState} from 'react';

const Form = () => {

  const [office, setOffice] = useState('--- select ---')
  const [name, setName] = useState('')
  
  const onOfficeChange = (e) => {
      setOffice(e.target.value)
  }
  const onNameChange = (e) => {
    setName(e.target.value)
  }

  return (
    <form>
      <div>
        <p>On a scale of Ha (1) to Hahahahaha (5), how important is humor in the workplace?</p>
        <div>
          <input id='ha' type='radio'  />
          <label htmlFor='ha'>Ha</label>
        </div>
        <div>
          <input id='haha' type='radio' />
          <label htmlFor='haha'>Haha</label>
        </div>
        <div>
          <input id='hahaha' type='radio' />
          <label htmlFor='hahaha'>Hahaha</label>
        </div>
        <div>
          <input id='hahahaha' type='radio' />
          <label htmlFor='hahahaha'>Hahahaha</label>
        </div>
        <div>
          <input id='hahahahaha' type='radio' />
          <label htmlFor='hahahahaha'>Hahahahaha</label>
        </div>
      </div>

      <div>
        <p>What is preventing you from using more humor at work?</p>
        <div>
          <input 
            id='check1' 
            type='checkbox' 
            checked= {false}  
          />
          <label htmlFor='check1'>I don't know how</label>
        </div>
        <div>
          <input 
            id='check2' 
            type='checkbox' 
            checked= {false}  
          />
          <label htmlFor='check2'>I don't see its value</label>
        </div>
        <div>
          <input 
            id='check3' 
            type='checkbox' 
            checked= {false} 
          />
          <label htmlFor='check3'>I don't think its appropriate</label>
        </div>
        <div>
          <input 
            id='check4' 
            type='checkbox' 
            checked= {false} 
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
    </form>
  )
}

export default Form;
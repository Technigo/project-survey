import React, { useState } from 'react'
import { Input } from 'Components/Input'
import { Radio } from 'Components/Radio'
import { Select } from 'Components/Select'
import { Button } from 'Components/Button'
import { Summary } from 'Components/Summary'
import './index.css'

export const App = () => {
    const [name, setName] = useState('')
    const [section, setSection] = useState(0)
    const [radioInput, setRadioInput] = useState(0) 
    const [food, setFood] = useState('') 

    const handleSubmit = event => {
        event.preventDefault()
        setSection(section+1)
}

return (
    <section className='survey'>
        <form onSubmit={handleSubmit}>

        {section === 0 &&
          <Input name={name} setName={setName} />
        }

        {section === 1 &&
           <Radio radioInput={radioInput} setRadioInput={setRadioInput} />
        } 

        {section === 2 &&
           <Select food={food} setFood={setFood} />
        } 

        {section < 3 &&
          <Button name={name} section={section} food={food} radioInput={radioInput}/>
        } 

        {section === 4 &&
          <Summary className='summary' name={name} food={food} radioInput={radioInput} />
        }      

        </form>
    </section>
    )       
}
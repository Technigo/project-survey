import React, { useState } from 'react'
import { Summary } from 'Compontents/Summary'
import { Input } from 'Compontents/Input'
import { Select } from 'Compontents/Select'
import { Radio } from 'Compontents/Radio'
import { Checkbox } from 'Compontents/Checkbox'
import { Button } from 'Compontents/Button'
import './index.css'

export const App = () => {
  const [name, setName] = useState('')
  const [section, setSection] = useState(0)
  const [radioInput, setRadioInput] = useState()
  const [agree, setAgree] = useState(false)
  const [tech, setTech] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    setSection(section + 1)
  };

  return (
    <section className='survey-card'>
      <form onSubmit={handleSubmit}>
        {section === 0 &&
          <Input name={name} setName={setName} />
        }

        {section === 1 &&
          <Select tech={tech} setTech={setTech} />
        }

        {section === 2 &&
          <Radio radioInput={radioInput} setRadioInput={setRadioInput} />
        }

        {section === 3 &&
          <Checkbox agree={agree} setAgree={setAgree} />
        }

        {section < 4 &&
          <Button name={name} section={section} tech={tech} radioInput={radioInput} agree={agree} />
        }

        {section === 4 &&
          <Summary className='summary' name={name} tech={tech} radioInput={radioInput} />
        }

      </form>

    </section>
  )
}

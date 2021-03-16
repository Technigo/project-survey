import React from 'react'
import RadioInput from './RadioInput'

import SelectInput from './SelectInput'
import TextInput from "./TextInput"
import Character from "./Character"
import RangeInput from './RangeInput'
import NumberInput from './NumberInput'


const stats = ["strength", "intelligence", "dexterity"]

const Form = () => {
    const handleClick = () => {
        console.log(Character)
    }

    return (
        <form onSubmit={(event) => event.preventDefault()}>
            <TextInput />
            <SelectInput />
            <RadioInput />
            <NumberInput />
            {stats.map(item =>
                <RangeInput
                    key={item}
                    rangeName={item}
                />)}

            <button onClick={handleClick}>Submit</button>
        </form>
    )
}

export default Form
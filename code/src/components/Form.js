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
            <TextInput
                label="Name"
                field="name"
                className="name-input"
            />
            <SelectInput
                choices={["mage", "thief", "knight"]}
                field="class"
                className="class-input"
            />
            <RadioInput
                choices={["orc", "human", "dwarf"]}
                field="race"
                className="race-input"
            />
            <TextInput
                label="Goal"
                field="goal"
                className="goal-input"
            />
            <NumberInput
                label="Age"
                field="age"
                className="age-input"
            />
            <SelectInput
                choices={["nobility", "farmer", "worker"]}
                field="family"
                className="family-input"
            />
            <div className="stats-container">
                {stats.map(item =>
                    <RangeInput
                        className="stats"
                        key={item}
                        rangeName={item}
                    />)}
            </div>
            <button onClick={handleClick}>Submit</button>
        </form>
    )
}

export default Form
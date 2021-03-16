import React from 'react'
import TextInput from './TextInput'
import Dropdown from './Dropdown'
import RadioButton from './RadioButton'
import SubmitButton from './SubmitButton'

const Form = () => {
    return (
        <form>
            <div>
                <h2>Start by entering something</h2>
                <TextInput />
            </div>
            <div>
                <h2>Select your favourite something</h2>
                <Dropdown />
            </div>
            <div>
                <h2>Choose one thing</h2>
                <RadioButton />
            </div>
            <div>
                <SubmitButton />
            </div>
        </form>
        

    )

}

export default Form
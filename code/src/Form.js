import React, { useState } from 'react'
import { Dropdown } from 'Dropdown'
import { Radio } from 'Radio'
import { Text } from 'Text'
import { Submit } from 'Submit'


export const Form = () => {

    const [dropInput, fetchDropInput] = useState("");
    const [radioInput, fetchRadioInput] = useState("");
    const [textInput, fetchTextInput] = useState("");
    const [submit, setSubmit] = useState(false);

    const handleDropInput = (data) => {
        fetchDropInput(data)
    }

    const handleTextInput = (data) => {
        fetchTextInput(data)
    }

    const handleRadioInput = (data) => {
        fetchRadioInput(data)
    }

    return <div>

        {submit === false ? (
            <form onSubmit={(e) => { e.preventDefault(); setSubmit(true) }} >
                <Dropdown handleDropInput={handleDropInput} />
                <Radio handleRadioInput={handleRadioInput} />
                <Text handleTextInput={handleTextInput} textInput={textInput} />
                <Submit />


            </form>
        ) : (<div>
            <p>{dropInput}</p>
            <p>{textInput}</p>
            <p>{radioInput}</p>

        </div>)
        }

    </div>
}
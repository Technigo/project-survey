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

    return <section class="survey">

        {submit === false ? (
            <form onSubmit={(e) => { e.preventDefault(); setSubmit(true) }} >
                <Radio handleRadioInput={handleRadioInput} />
                <Text handleTextInput={handleTextInput} textInput={textInput} />
                <Dropdown handleDropInput={handleDropInput} />
                <Submit />


            </form>
        ) : (<section class="summary">
                <p>{dropInput}</p>
                <p>{textInput}</p>
                <p>{radioInput}</p>

        </section>)
        }

    </section>
}
import React, { useState } from 'react'
import { Dropdown } from 'Dropdown'
import { Radio } from 'Radio'
import { Text } from 'Text'
import { Submit } from 'Submit'



export const Form = () => {
 
    const [dropInput, fetchDropInput] = useState("")
    const [radioInput, fetchRadioInput] = useState("")
    const [textInput, fetchTextInput] = useState("")
    const [section, setSection] = useState('start')

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

        
        <form onSubmit={(e) => { e.preventDefault() }} >

            {section === 'start' && (
                <section>
                    <p className="question">Stay on my wing and ill take you home?</p>
                    <Submit title="Yes!" setSection={setSection} value='callsign'/>
                </section>
            )}

            {section === 'callsign' && (
                <section>
                    <Radio handleRadioInput={handleRadioInput} />
                    <Submit title="Go!" setSection={setSection} value='quote'/>
                </section>
            )}

            {section === 'quote' && (
                <section>
                    <Text handleTextInput={handleTextInput} />
                    <Submit title="Go!" setSection={setSection} value='rate'/>
                </section>
            )}

            {section === 'rate' && (
                <section>  
                    <Dropdown handleDropInput={handleDropInput} />
                    <Submit title="Go!" setSection={setSection} value='summary'/>
                </section>
            )}

            {section === 'summary' && (
                <section class="summary" tabIndex="0">
                    <p tabIndex="0">Favo{radioInput}, take this boogie off my tail!</p>
                    <p tabIndex="0">"I feel the need for {textInput}!"</p>
                    <p tabIndex="0">You rated Top Gun:{dropInput}</p>
                </section>
            )}

        </form>

    </section>
}
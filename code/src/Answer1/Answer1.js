import React from 'react'
import './Answer1.css'
import RadioForm from 'RadioForm/RadioForm'

const Answer1 = ({ answer, setResult, result }) => {

    return (
        <div className="form_radio_container">
            <RadioForm answer={answer} setResult={setResult} result={result} />
        </div>
    )
}

export default Answer1
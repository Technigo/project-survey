import React from 'react'
import './Answer3.css'
import RadioForm from 'RadioForm/RadioForm'

const Answer3 = ({ answer, setResult, result }) => {

    return (
        <div className="form_radio_container_3">
            <RadioForm answer={answer} setResult={setResult} result={result} />
        </div>
    )
}


export default Answer3
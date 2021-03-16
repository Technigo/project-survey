import React, { useState } from 'react'

const RadioButton = () => {
    const [firstRadio, setFirstRadio] = useState(false)
    const [secondRadio, setSecondRadio] = useState(false)

    const onFirstRadioChange = (e) => {
        console.log(e.target.value)
        setFirstRadio(e.target.value)
    }

    const onSecondRadioChange = (e) => {
        console.log(e.target.value)
        setSecondRadio(e.target.value)
    }

    return(
        <div>
            <label htmlFor='firstRadio'> First</label>
            <input 
                name="irstRadio"
                type="radio" 
                checked={firstRadio} 
                onChange={onFirstRadioChange}>
            </input>
            <label htmlFor='secondRadio'> Second</label>
            <input 
                name="secondRadio"
                type="radio" 
                checked={secondRadio} 
                onChange={onSecondRadioChange}>
            </input>
        </div>

    )
}
export default RadioButton
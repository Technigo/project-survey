import React from 'react'

export const ThirdQuestion = (props) => {
    const {officeInput, onOfficeInputChange, onStepChange, onStepBackChange} = props
    return(
        <div>
            <label htmlFor="helsinkiOffice">Helsinki</label>
            <input 
            name={officeInput}
            id="helsinkiOffice"
            type="radio" 
            value='Helsinki'
            onChange={onOfficeInputChange}/>

            <label htmlFor="lissabonOffice">Lissabon</label>
            <input 
            name={officeInput}
            id="lissabonOffice"
            type="radio" 
            value='Lissabon'
            onChange={onOfficeInputChange}/>

            <label htmlFor="remotely">Remotely</label>
            <input 
            name={officeInput}
            id="remotely"
            type="radio" 
            value='remotely'
            onChange={onOfficeInputChange}/>
            
            <button onClick={onStepChange}>Next question</button>
            <button onClick={onStepBackChange}>Previous question</button>
        </div>
      )
} 
import React from 'react'
import './dropdown.css'

export const Dropdown = (props) => {

   /*  const changeSelectState = (event) => {
        props.selectValue!==""
        ?props.setSelectValue(event.target.value)/* &&setShowErrorMessage(false) */
        //:alert('Please select a option!')/* setShowErrorMessage(true) */;
     // } */

    return (
        <div>
            <h2 tabIndex={'0'}>{props.question}</h2>
            <select tabIndex={'0'} onChange={(event) => props.setSelectValue(event.target.value)} value={props.selectValue} required>
                {props.optionsArray.map((object) => (
                    <option tabIndex={'0'} className="dropdown" key={object.value} value={object.value}>{object.text}</option>
                ))}
            </select>
        </div>
    )

}
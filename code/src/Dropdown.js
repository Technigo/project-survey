import React from 'react'

export const Dropdown = (props) => {

   /*  const changeSelectState = (event) => {
        props.selectValue!==""
        ?props.setSelectValue(event.target.value)/* &&setShowErrorMessage(false) */
        //:alert('Please select a option!')/* setShowErrorMessage(true) */;
     // } */

    return (
        <div>
            <h2>{props.question}</h2>
            <select onChange={(event) => props.setSelectValue(event.target.value)}/* {props.setSelectValue} */ value={props.selectValue} required>
                {props.optionsArray.map((object) => (
                    <option key={object.value} value={object.value}>{object.text}</option>
                ))}
            </select>
        </div>
    )

}
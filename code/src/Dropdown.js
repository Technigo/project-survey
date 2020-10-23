import React from 'react'
import "./Dropdown.css"

export const Dropdown = (props) => {

    return (
        <label className="label">
            <h3> {props.label} </h3>
            <select className="dropdown"
                onChange={event => props.onChanged(event.target.value)}
                value={props.selectedValue}
            >
                <option value="">{props.title}</option>
                {props.values.map((item, index) => {
                    return (
                        <option key={index} value={item}>
                            {item}
                        </option>
                    )
                })}
            </select>
        </label>
    )
} 

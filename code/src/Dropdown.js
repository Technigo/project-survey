import React, { useState } from 'react'

export const Dropdown = (props) => {
    return (
        <div>
            <h2>{props.question}</h2>
            <select onChange={(event) => props.setSelectValue(event.target.value)}
                value={props.selectValue}>
                <option value={props.zero}>{props.zero}</option>
                <option value={props.one}>{props.one}</option>
                <option value={props.two}>{props.two}</option>
                <option value={props.three}>{props.three}</option>
                <option value={props.four}>{props.four}</option>
                <option value={props.five}>{props.five}</option>
            </select>
        </div>
    )

}
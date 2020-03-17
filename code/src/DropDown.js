import React, { useState } from "react"


export const DropDown = () => {
    const [number, setNumber] = useState()
    return <label>
        How many books did you read last year?
        <select onChange={(event) => setNumber(event.target.value)} value={number}>
            <option value="">Pick a number</option>
            <option value="0-10">0-10</option>
            <option value="11-20">11-20</option>
            <option value="21-30">21-30</option>
            <option value="31-40">31-40</option>
            <option value="41-50">41-50</option>
            <option value="More than 50">More than 50</option>
        </select>
    </label>
}
import React from 'react'

import { Option } from 'components/Option'

export const Select = ({shipDuration, setShipDuration, durationQuestion, duration}) => {
    // console.log("from select component", shipDuration)
    return (
        <label>
            <h2>{durationQuestion}</h2>
            <select 
                defaultValue={shipDuration} 
                onChange={setShipDuration}>
                {<option value="default" disabled hidden>Duration</option>}
                {duration.map((a) =>
                    <Option
                        value = {a}
                    />
                )}
            </select>
        </label>
    )
}

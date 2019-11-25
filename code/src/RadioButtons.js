import React, { useState } from 'react'

const when = ["All the time", "Every day", "Always" ]

export const RadioButtons = () => {

    const [whenTime, setWhen]= useState();

    return (
        <div>
            {when.map(time => (
                <label key = {time}>
                    <input
                    type = "radio"
                    value={time}
                    onChange={event => setWhen(event.target.value)}
                    checked={whenTime === time}
                    />
                    {time}
                </label>
            ))
            }
        </div>
    )
}
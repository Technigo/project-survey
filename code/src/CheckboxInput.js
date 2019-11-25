import React, {useState} from 'react'

export const CheckboxInput = () => {
    const [wantCat, setWantCat] = useState(false);

    return (
        <label>
        Do you want a cat in your bed?
            <input
            type = "checkbox"
            checked = {wantCat}
            onChange= {event => setWantCat(event.target.checked)}
            />
        </label>
    )
}
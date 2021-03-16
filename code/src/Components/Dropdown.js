import React, { useState } from 'react'

const Dropdown = () => {

    const [option, setOption] = useState ('')

    const onOptionChange = (e) => {
        console.log(e.target.value)
        setOption(e.target.value)
    }

    return (
        <div>
            <label htmlFor="option">Select something</label>
            <select name="option" onChange={onOptionChange}>
                <option value="one">
                    option 1
                </option>
                <option value="two">
                    option 2
                </option>
                <option value="three">
                    option 3
                </option>
            </select>
        </div>
    )
}

export default Dropdown
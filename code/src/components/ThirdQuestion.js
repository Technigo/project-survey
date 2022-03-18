import React from 'react'

const Checkbox = ({nextPage, backPage}) => {

    const [checked, setChecked] = React.useState(false)

    const handleChange = () => {
        setChecked(!checked)
    }

    return (

        <div>
            <p>What would you like to read more about?</p>

        <ul>
            <li>
                <label>
                    <input 
                    type="checkbox"
                    checked={checked}
                    onChange={handleChange} />
                    Lemons
                </label>
            </li>

            <li>
                <label>
                    <input 
                    type="checkbox"
                    checked={checked}
                    onChange={handleChange} />
                    Bananas
                </label>
            </li>

            <li>
                <label>
                    <input 
                    type="checkbox"
                    checked={checked}
                    onChange={handleChange} />
                    Apples
                </label>
            </li>
        </ul>

        <button class="btn" type="submit" onClick={nextPage}> Next question!</button>
        <button class="btn" type="submit" onClick={backPage}> <span role="img" aria-label="back arrow emoji">↩️</span> Go back</button>


        </div>

    )


}


export default Checkbox
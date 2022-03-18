import React, { useState } from 'react'

const Checkbox = ({nextPage, backPage}) => {

    // const [checked, setChecked] = React.useState(false)

    const [checked, setChecked] = useState([])

    // const handleChange = () => {
    //     setChecked(!checked)
    // }


    const onCheckboxChange = (interest) => {
        if (checked.includes(interest)) {
        const filteredCheckbox = checked.filter(item => {
            return item !== interest
        })
        setChecked(filteredCheckbox)
        } else {
            setChecked([...checked, interest])
        }
    }



    return (

        <div>
            <p>What would you like to read more about?</p>

        <ul>
            <li>
                <label htmlFor="pie" key="pie">
                    <input 
                    id="pie"
                    type="checkbox"
                    checked={checked.includes('pie')}
                    onChange={() => onCheckboxChange('pie')}/>
                    Key Lime Pie
                </label>
            </li>

            <li>
                <label htmlFor="stockholm">
                    <input 
                    id="stockholm"
                    type="checkbox"
                    checked={checked.includes('stockholm')}
                    onChange={() => onCheckboxChange('stockholm')} />
                    Best places in Stockholm
                </label>
            </li>

            <li>
                <label htmlFor="apples">
                    <input 
                    id="apples"
                    type="checkbox"
                    checked={checked.includes('apples')}
                    onChange={() => onCheckboxChange('apples')}  />
                    Apples
                </label>
            </li>
        </ul>


        <button class="btn" type="submit" onClick={backPage}> 
        <span role="img" aria-label="back arrow emoji">↩️</span> Go back
        </button>

        <button class="btn" type="submit" onClick={nextPage}> Next question!</button>

        </div>

    )


}


export default Checkbox
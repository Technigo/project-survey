import React, { useState } from 'react'

const Checkbox = ({nextPage, backPage}) => {

    const [checked, setChecked] = useState([])


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
            <p className="descriptive-text">Pick as many as you want <span role="img" aria-label="girl waving emoji">🙋‍♀️</span></p>

        <ul className="ul-list">
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
                <label htmlFor="tech">
                    <input 
                    id="tech"
                    type="checkbox"
                    checked={checked.includes('tech')}
                    onChange={() => onCheckboxChange('tech')}  />
                    Tech News
                </label>
            </li>

            <li>
                <label htmlFor="programming">
                    <input 
                    id="programming"
                    type="checkbox"
                    checked={checked.includes('programming')}
                    onChange={() => onCheckboxChange('programming')}  />
                    Programming
                </label>
            </li>
        </ul>


        <button className="btn-special" type="submit" onClick={backPage}> 
        <span role="img" aria-label="back arrow emoji">↩️</span> Go back
        </button>

        <button className="btn-special" type="submit" onClick={nextPage}> Next question!</button>

        </div>

    )


}


export default Checkbox
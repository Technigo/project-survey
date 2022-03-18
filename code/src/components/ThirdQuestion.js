import React, { useState } from 'react'

const Interests = ({nextPage, backPage}) => {

    // const [checked, setChecked] = useState([])


    // const onCheckboxChange = (interest) => {
    //     if (checked.includes(interest)) {
    //     const filteredCheckbox = checked.filter(item => {
    //         return item !== interest
    //     })
    //     setChecked(filteredCheckbox)
    //     } else {
    //         setChecked([...checked, interest])
    //     }
    // }

    // const arrayOfInterests = [
    //     'Key Lime Pie', 
    //     'Best visits in Stockholm', 
    //     'Tech News', 
    //     'Programming']


    return (

        <div>
            <p>What would you like to read more about?</p>
            <p className="descriptive-text">Pick your favourite! <span role="img" aria-label="girl waving emoji">🙋‍♀️</span></p>





        {/* <ul className="ul-list">
            <li>
                <label key="pie">
                    <input 
                    id="pie"
                    type="radio"
                    checked={checked.includes('pie')}
                    onChange={() => onCheckboxChange('pie')}/>
                    <span className="checkbox">Key Lime Pie</span>
                </label>
            </li>

            <li>
                <label key="stockholm">
                    <input 
                    id="stockholm"
                    type="radio"
                    checked={checked.includes('stockholm')}
                    onChange={() => onCheckboxChange('stockholm')} />
                    <span className="checkbox">Best places in Stockholm</span>
                </label>
            </li>

            <li>
                <label key="tech">
                    <input 
                    id="tech"
                    type="radio"
                    checked={checked.includes('tech')}
                    onChange={() => onCheckboxChange('tech')}  />
                    <span className="checkbox">Tech News</span>
                </label>
            </li>

            <li>
                <label key="programming">
                    <input 
                    id="programming"
                    type="radio"
                    checked={checked.includes('programming')}
                    onChange={() => onCheckboxChange('programming')}  />
                    <span className="checkbox">Programming</span>
                </label>
            </li>
        </ul> */}


        <button className="btn-special" type="submit" onClick={backPage}> 
        <span role="img" aria-label="back arrow emoji">↩️</span> Go back
        </button>

        <button className="btn-special" type="submit" onClick={nextPage}> Next question!</button>

        </div>

    )


}


export default Interests
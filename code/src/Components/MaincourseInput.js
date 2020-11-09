import React from 'react'

const MaincourseInput = ({ maincourse, setMaincourse }) => {

    const handleMaincourseChange = event => {
        setMaincourse(event.target.value)
    }

    return (
        <select value={maincourse} onChange={handleMaincourseChange} className="drop-down">
            <option value="">Main courses...</option>
            <option value="Salmon">Salmon</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="Chicken">Chicken</option>
            <option value="Steak">Steak</option>
            <option value="Soup">Soup</option>
        </select>
    )
}

export default MaincourseInput
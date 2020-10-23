import React from 'react';

const MaincourseInput = ({ userMaincourse, userSetMaincourse }) => {
    
     const handleMaincourseChange = event => {
        userSetMaincourse(event.target.value);
    }
    
    return (
        <select value={userMaincourse} onChange={handleMaincourseChange}>
        <option value="">Choose your Main course...</option>
        <option value="Salmon">Salmon</option>
        <option value="Vegetarian">Vegetarian</option>
        <option value="Chicken">Chicken</option>
        <option value="Steak">Steak</option>
        <option value="Soup">Soup</option>
    </select>
    )
}

export default MaincourseInput;
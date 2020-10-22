import React, { useState } from 'react';

import NameInput from 'Components/NameInput';
import MaincourseInput from 'Components/MaincourseInput';
import DrinksInput from 'Components/DrinksInput';
import DessertInput from 'Components/DessertInput';
import Summary from './Summary';

const Form = () => {
    const [name, setName] = useState('');
    const [maincourse, setMaincourse] = useState('');
    const [drinks, setDrinks] = useState([]);
    const [dessert, setDessert] = useState([]);
    const [showSummary, setShowSummary] = useState(false)

    const handleNameChange = event => {
        setName(event.target.value);
        // setName(newName);
    }
   
    const handleMaincourseChange = event => {
        setMaincourse(event.target.value);
    }

    const handleDrinksChange = drinksValue => {
        drinks.includes(drinksValue)
            ? setDrinks(drinks.filter(item => item !== drinksValue))
            : setDrinks([...drinks, drinksValue])    
    }

    const handleDessertChange = event => {
        setDessert(event.target.value);
    }
    
    const handleSubmit = event => {
    event.preventDefault()
    setShowSummary(true)
  };

    return (
        <div className="text-input">
        {!showSummary ? (
        <form onSubmit={handleSubmit}>
            <NameInput userName={name} onNameChange={handleNameChange} />
            <MaincourseInput userMaincourse={maincourse} onMaincourseChange={handleMaincourseChange} />
            <DrinksInput userDrinks={drinks} onDrinksChange={handleDrinksChange} /> 
            <DessertInput userDessert={dessert} onDessertChange={handleDessertChange} />
            {/* <CourseInput /> */}
            <button className="btn" type="submit" 
            disabled={name === '' || maincourse === ''|| drinks === '' || dessert === ''}>
                Submit</button>     
        </form>
    ):(
        <Summary
        userName={name}
        userMaincourse={maincourse}
        userDrinks={drinks}
    />
    )}
    </div>
  )
}

export default Form;
import React, { useState } from 'react';
import FirstQuestion from './FirstQuestion';
import SecondQuestion from './SecondQuestion';
import Summary from './Summary';
import DropDown from './DropDown';
import RadioButtons from './RadioButtons';

const CalculationForm = () => {
const [username, setUsername] = useState('');
const [numberOne, setNumberOne] = useState(0);
const [numberTwo, setNumberTwo] = useState(0);
const [isResultDisplayed, setIsResultDisplayed] = useState(false);
const [location, setLocation] = useState('');
const [ageGroup, setAgeGroup] = useState('');

const handleInputChange = (event) => {
    setUsername(event.target.value);
};

const handleFirstNumberChange = (event) => {
    setNumberOne(Number(event.target.value));
};

const handleSecondNumberChange = (event) => {
    setNumberTwo(Number(event.target.value));
};

const locationChange = (event) => {
    setLocation(event.target.value);
};

const ageChange = (event) => {
    setAgeGroup(event.target.value);
};

//./src/components/CalculationForm.js
//Line 40:13:  Emojis should be wrapped in <span>, have role="img", and have an accessible description with aria-label or aria-labelledby  jsx-a11y/accessible-emoji


    return (
        <section>
            <h1 className="title-text">Ghost story 👻 writer</h1>
          
            <FirstQuestion 
                username={username} 
                onInputChange={handleInputChange} />

            <DropDown 
            locationChange={locationChange}
                value={location}
                    />

            <RadioButtons
                ageChange={ageChange}
                ageGroup={ageGroup}
                    />
                
            <SecondQuestion 
                numberOne={numberOne}
                numberTwo={numberTwo} 
                onFirstNumberChange={handleFirstNumberChange} 
                onSecondNumberChange={handleSecondNumberChange}/>
                    <button onClick={() => setIsResultDisplayed(true) } >Reveal ghost story</button>


            {isResultDisplayed && (
                
            <Summary 
                username={username} 
                numberOne={numberOne}
                numberTwo={numberTwo}
                location={location}  
                ageGroup={ageGroup}
                />


                )}
        </section>

    )
}
export default CalculationForm;

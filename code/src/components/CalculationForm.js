import React, { useState } from 'react';
import FirstQuestion from './FirstQuestion';
import SecondQuestion from './SecondQuestion';
import Summary from './Summary';
import DropDown from './DropDown';
import RadioButtons from './RadioButtons'

const CalculationForm = () => {
const [username, setUsername] = useState('');
const [numberOne, setNumberOne] = useState(0);
const [numberTwo, setNumberTwo] = useState(0);
const [isResultDisplayed, setIsResultDisplayed] = useState(false);
const [location, setLocation] = useState('');
const [ageGroup, setAgeGroup] = useState(); // group here?


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

const AgeChange = (event) => {
    setAgeGroup(event.target.value);
};



    return (
        <section>
            <h1>Welcome to crazy town wild one</h1>
          
            <FirstQuestion 
                username={username} 
                onInputChange={handleInputChange} />

            <DropDown 
            locationChange={locationChange}
                value={location}
                    />

            <RadioButtons
                AgeChange={AgeChange}
                value={group}
                checked={ageGroup === group}
            />
                
            <SecondQuestion 
                numberOne={numberOne}
                numberTwo={numberTwo} 
                onFirstNumberChange={handleFirstNumberChange} 
                onSecondNumberChange={handleSecondNumberChange}/>
                    <button onClick={() => setIsResultDisplayed(true) } >Reveal</button>


            {isResultDisplayed && (
                
            <Summary 
                username={username} 
                numberOne={numberOne}
                numberTwo={numberTwo}
                location={location}  />


                )}
        </section>

    )
}
export default CalculationForm;
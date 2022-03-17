import React, { useState } from 'react';
import FirstQuestion from './FirstQuestion';
import SecondQuestion from './SecondQuestion';
import Summary from './Summary';

const CalculationForm = () => {
const [username, setUsername] = useState('');
const [numberOne, setNumberOne] = useState(0);
const [numberTwo, setNumberTwo] = useState(0);
const [isResultDisplayed, setIsResultDisplayed] = useState(false);


const handleInputChange = (event) => {
    setUsername(event.target.value);
};

const handleFirstNumberChange = (event) => {
    setNumberOne(Number(event.target.value));
};

const handleSecondNumberChange = (event) => {
    setNumberTwo(Number(event.target.value));
};

    return (
        <section>
            <h1>Welcome to crazy town</h1>
          
                <FirstQuestion username={username} onInputChange={handleInputChange} />
                
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
                numberTwo={numberTwo}  />
                )}
        </section>

    )
}
export default CalculationForm;
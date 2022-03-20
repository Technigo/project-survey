import React, { useState } from 'react';

import Welcome from './Welcome';
import Checkbox from './Checkbox'
import RadioButtons from './RadioButtons';
import Input from './Input';
import Select from'./Select';
import SecondSelect from './SecondSelect';
import Summary from './Summary';


export const Form = () => {
    const [username, setUsername] = useState('');
    const [intervals, setInterval] = useState('');
    const [favouriteMovie, setFavouriteMovie] = useState('')
    const [isResultDisplayed, setIsResultDisplayed] = useState(false)
    const [newMovies, setNewMovies] = useState("");
    const [snacks, setSnacks] = useState("");
    const [question, setQuestion] = useState(0);

    const handleInputChange = (event) => {
        setUsername(event.target.value);
    };

    const handleOnChangeAgain = (event) => {
        setInterval(event.target.value);
    };

    const handleInputChangeAgain = (event) => {
        setFavouriteMovie(event.target.value);
    };

    const handleOnChange = (event) => {
        setNewMovies(event.target.value);
    };

    const handleOnChange3 = (event) => {
        setSnacks(event.target.value);
    };

    const handleOnClickNext = () => {
        setQuestion(question+1);
    }

     return ( 
        <section>
            {question === 0 && (
            <Welcome 
                username={username}
                onInputChange={handleInputChange}
                onClickNext={handleOnClickNext}
            />
            )}
            {question === 1 && (
            <Checkbox 
                onClickNext={handleOnClickNext}
            />
            )}
            {question === 2 && (
            <RadioButtons
                intervalGroup={intervals}
                onChangeAgain={handleOnChangeAgain}
                onClickNext={handleOnClickNext}
            />
            )}
            {question === 3 && (
            <Input
                favouriteMovie={favouriteMovie}
                onInputChangeAgain={handleInputChangeAgain}
                onClickNext={handleOnClickNext}
            />
            )}
            {question === 4 && (
            <Select
                newMovies={newMovies}
                onChange={handleOnChange}
                onClickNext={handleOnClickNext}
            />
            )}
            {question === 5 && (
            <SecondSelect
                snacks={snacks}
                onChange3={handleOnChange3}
                onClickNext={handleOnClickNext}
            />
            )}
            <button onClick={() => setIsResultDisplayed(true)}>Click to see your summary</button>
            {isResultDisplayed && (
                <Summary username={username}/>
            )}
        </section>
    );
};











// numberOne={numberOne}
// numberTwo={numberTwo}
   // const [numberOne, setNumberOne] = useState(0);
    // const [numberTwo, setNumberTwo] = useState(0);

// const handleFirstNumberChange = (event) => {
//     setNumberOne(Number(event.target.value));
// };

// const handleSecondNumberChange = (event) => {
//     setNumberTwo(Number(event.target.value));
// };


   {/* <QuestionOne 
                numberOne={numberOne} 
                numberTwo={numberTwo} 
                onFirstNumberChange={handleFirstNumberChange}
                onSecondNumberChange={handleSecondNumberChange}
            /> */}
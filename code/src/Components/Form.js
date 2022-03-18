import React, { useState } from 'react';

import Welcome from './Welcome';
import Info from './Info';
import Checkbox from './CheckBox'
import RadioButtons from './RadioButtons';
import Input from './Input';
import Select from'./Select';
import SecondSelect from './SecondSelect';
import Summary from './Summary';


export const Form = () => {
    const [username, setUsername] = useState('');
    const [intervals, setInterval] = useState('');
    // const intervals = ["2+ times a week", "1-2 times a week", "1-2 times a month", "Never, I don't have good taste in movies 🙄"];
    const [favouriteMovie, setFavouriteMovie] = useState('')
    const [isResultDisplayed, setIsResultDisplayed] = useState(false)
    const [newMovies, setNewMovies] = useState("");
    const [snacks, setSnacks] = useState("");

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

     return ( 
        <section>
            <Welcome username={username} onInputChange={handleInputChange} />
            <Info />
            <Checkbox />
            <RadioButtons intervalGroup={intervals} onChangeAgain={handleOnChangeAgain} />
            <Input favouriteMovie={favouriteMovie} onInputChangeAgain={handleInputChangeAgain} />
            <Select newMovies={newMovies} onChange={handleOnChange} />
            <SecondSelect snacks={snacks} onChange3={handleOnChange3} />

            <button onClick={() => setIsResultDisplayed(true)}>Click to see your summary</button>
            {isResultDisplayed && (
                <Summary 
                    username={username}

                />
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
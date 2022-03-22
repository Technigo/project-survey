import React, { useState } from 'react';

import Welcome from './Welcome';
import Checkbox from './Checkbox';
import RadioButtons from './RadioButtons';
import Input from './Input';
import Select from'./Select';
import SecondSelect from './SecondSelect';
import Summary from './Summary';
import ThankYou from './ThankYou';


export const Form = () => {
    const [username, setUsername] = useState('');
    const [wantsMember, setWantsMember] = useState(false);
    const [intervals, setInterval] = useState('');
    const [favouriteMovie, setFavouriteMovie] = useState('');
    const [newMovies, setNewMovies] = useState('');
    const [snacks, setSnacks] = useState('');
    const [question, setQuestion] = useState(0);

    const handleOnChangeMember= (event) => {
        setWantsMember(event.target.checked);
    };

    const handleInputChangeName = (event) => {
        setUsername(event.target.value);
    };
    const handleOnChangeInterval = (event) => {
        setInterval(event.target.value);
    };
    const handleInputChangeMovie = (event) => {
        setFavouriteMovie(event.target.value);
    };
    const handleOnChangeMovie = (event) => {
        setNewMovies(event.target.value);
    };
    const handleOnChangeSnack = (event) => {
        setSnacks(event.target.value);
    };
    const handleOnClickNext = () => {
        setQuestion(question+1);
    };

     return ( 
        <section className="form section">
            <div className="section-child">
                {question === 0 && (
                <Welcome 
                    username={username}
                    onInputChangeName={handleInputChangeName}
                    onClickNext={handleOnClickNext}
                />
                )}
                {question === 1 && (
                <Checkbox 
                    wantsMember={wantsMember}
                    onChangeMember={handleOnChangeMember}
                    onClickNext={handleOnClickNext}
                />
                )}
                {question === 2 && (
                <RadioButtons
                    intervalGroup={intervals}
                    onChangeInterval={handleOnChangeInterval}
                    onClickNext={handleOnClickNext}
                />
                )}
                {question === 3 && (
                <Input
                    favouriteMovie={favouriteMovie}
                    onInputChangeMovie={handleInputChangeMovie}
                    onClickNext={handleOnClickNext}
                />
                )}
                {question === 4 && (
                <Select
                    newMovies={newMovies}
                    onChangeMovie={handleOnChangeMovie}
                    onClickNext={handleOnClickNext}
                />
                )}
                {question === 5 && (
                <SecondSelect
                    snacks={snacks}
                    onChangeSnack={handleOnChangeSnack}
                    onClickNext={handleOnClickNext}
                />
                )}
                {question === 6 && (
                    <Summary
                        username={username}
                        intervalGroup={intervals}
                        favouriteMovie={favouriteMovie}
                        newMovies={newMovies}
                        snacks={snacks}
                        onClickNext={handleOnClickNext}
                    />
                )}
                {question === 7 && (
                    <ThankYou />
                )}
            </div>
        </section>
    );
};

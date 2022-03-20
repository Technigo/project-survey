import React, { useState } from "react";

import Intro from './Intro';
import Name from './Name';
import Where from './Where';
import Snacks from "./Snacks";
import Drinks from "./Drinks";
import Summary from "./Summary";
import Button from "./Button";
import StartButton from "./StartButton";
import TryAgainButton from "./TryAgainButton";
import SubmitButton from "./SubmitButton";


const Form = () => {
    const [nameInput, setNameInput] = useState('');
    const [whereInput, setWhereInput] = useState('');
    const [snacksInput, setSnacksInput] = useState('');
    const [drinksInput, setDrinksInput] = useState('');
    const [page, setPage] = useState(1)

    const handleNameInputChange = (event) => {
        setNameInput(event.target.value);
    };

    const handleWhereInputChange = (event) => {
        setWhereInput(event.target.value);
    };

    const handleSnacksInputChange = (event) => {
        setSnacksInput(event.target.value);
    };

    const handleDrinksInputChange = (event) => {
        setDrinksInput(event.target.value);
    };

    const handleStepChange = () => {
        setPage(page + 1)
    };

    const handleRestartChange = () => {
        window.location.reload();
    };


    return (
        <>
            <div>
                {page === 1 && (
                    <Intro
                    />
                )}

                {page === 2 && (
                    <Name
                        nameInput={nameInput}
                        onNameInputChange={handleNameInputChange}
                    />
                )}
                {page === 3 && (
                    <Where
                        whereInput={whereInput}
                        onWhereInputChange={handleWhereInputChange}
                    />
                )}
                {page === 4 && (
                    <Snacks
                        snacksInput={snacksInput}
                        onSnacksInputChange={handleSnacksInputChange}
                    />
                )}
                {page === 5 && (
                    <Drinks
                        drinksInput={drinksInput}
                        onDrinksInputChange={handleDrinksInputChange}
                    />
                )}
                {page === 6 && (
                    <Summary
                        nameInput={nameInput}
                        whereInput={whereInput}
                        snacksInput={snacksInput}
                        drinksInput={drinksInput}
                        onRestartChange={handleRestartChange}
                    />
                )}
                {page === 1 && (
                    <StartButton
                        onStepChange={handleStepChange}
                    />
                )}
                {
                    (page >= 2 && page <= 4)
                        ? <Button onStepChange={handleStepChange} />
                        : null
                }
                {page === 5 && (
                    <SubmitButton
                        onStepChange={handleStepChange}
                    />
                )}
                {page === 6 && (
                    <TryAgainButton
                        onRestartChange={handleRestartChange}
                    />
                )}

            </div>
        </>
    )

}
export default Form;
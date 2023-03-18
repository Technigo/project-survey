/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
import React from 'react';

const Drink = (props) => {
const { drink, setDrink, cake, setCake } = props;

const goToNextQuestion = () => {
    setCake(cake + 1)
}

const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
        goToNextQuestion();
    }
}

const handleDrinkChange = (event) => {
setDrink(event.target.value);
}
return (
    <>
    <p>What is your favorite drink?</p>
    <input
    type="text"
    value={drink}
    onKeyDown={handleKeyDown}
    onChange={handleDrinkChange} />
    </>
)
}

export default Drink;
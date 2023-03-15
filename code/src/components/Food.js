Import React from 'react';

const FoodOption = [
    'The biggest cake you ever seen?',
    'Buffé with all your favourite food?',
    'Fruits and berries in piles?',
    'Ice cream that never melt and never ends?',
];

export const Food = ({ food, setFood }) => {
    const handleFoodChange = (event) => {
        setFood(event.target.value);
    }
}
return (
    <>
    <p>What do you wanna eat on your party?</p>
    <input type="radio" value={food} onChange={handleFoodChange} />
    </>
)
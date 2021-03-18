import React from 'react';

const HousesSelect = ({gameOfThronesHouse, setGameOfThronesHouse, handleSubmit}) => {
    const onHouseChange = (e) => {
        console.log(`Favorite GOT family: ${e.target.value}`);
        setGameOfThronesHouse(e.target.value);
    };

    return (
        <>
        <form className="select-dropdown">
            <h2 className="question-heading">
                There are nine Great Houses in Westeros. Which one is your favorite?
            </h2>
            <div className="select-options">
            <label htmlFor='game-of-thrones-houses'>Choose your favorite house:</label>
            <select 
                name='game-of-thrones-houses' 
                id='game-of-thrones-houses'
                onChange={onHouseChange}
                value={gameOfThronesHouse}
                required
            >
                <option value='' disabled></option>
                <option value='House Targaryen'>House Targaryen</option>
                <option value='House Stark'>House Stark</option>
                <option value='House Greyjoy'>House Greyjoy</option>
                <option value='House Lannister'>House Lannister</option>
                <option value='House Tyrell'>House Tyrell</option>
                <option value='House Arryn'>House Arryn</option>
                <option value='House Tully'>House Tully</option>
                <option value='House Martell'>House Martell</option>
                <option value='House Baratheon'>House Baratheon</option>
            </select>
            </div>
            <button onSubmit={handleSubmit}
                className="button"
                type='submit'
                > Next!
            </button> 
        </form>
    </>
    );
};

export default HousesSelect;
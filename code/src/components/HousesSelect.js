import React from 'react';

const HousesSelect = ({gameOfThronesHouse, setGameOfThronesHouse, handleSubmit}) => {
    const onHouseChange = (e) => {
        setGameOfThronesHouse(e.target.value);
    };

    return (
        <>
        <form className='select-dropdown'>
            <h2 tabIndex='0' aria-label='There are nine Great Houses in Westeros. Which one is your favorite?' className='question-heading'>
                There are nine Great Houses in Westeros. Which one is your favorite?
            </h2>
            <div className='select-button-container'>
                <div className='select-options'>
                    <label tabIndex='0' htmlFor='game-of-thrones-houses'>Choose your favorite house:</label>
                    <select 
                        className='select'
                        aria-label='Choose your favorite house'
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
                <div>
                    <button onSubmit={handleSubmit}
                        className='button'
                        tabIndex='0'
                        aria-pressed='false'
                        aria-label='Next question'
                        type='submit'
                        > Next!
                    </button> 
                </div>
            </div>
        </form>
    </>
    );
};

export default HousesSelect;
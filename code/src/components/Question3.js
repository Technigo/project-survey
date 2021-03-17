import React from 'react';

const Question3 = (props) => {
    const {gameOfThronesHouse, setGameOfThronesHouse, next3} = props;

    return (
        <>
        <form>
            <label for='game-of-thrones-houses'>Choose your favourite house:</label>
            <select name='houses' id='game-of-thrones-houses'
                onChange={(event) => setGameOfThronesHouse(event.target.value)}
                value={gameOfThronesHouse}
            >
                <option value=''></option>
                <option value='targaryen'>House Targaryen</option>
                <option value='stark'>House Stark</option>
                <option value='lannister'>House Lannister</option>
                <option value='tyrell'>House Tyrell</option>
                <option value='arryn'>House Arryn</option>
                <option value='tully'>House Tully</option>
                <option value='martell'>House Martell</option>
                <option value='baratheon'>House Baratheon</option>
            </select>
        </form>
        <button onClick={next3}>Next</button>
    </>
    );
};

export default Question3;
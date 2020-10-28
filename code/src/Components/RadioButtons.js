import React from 'react';

const gamesList = [
    'Beat Saber',
    'SPARC',
    'Until you Fall',
    'Pistol Whip',
    'No Man\'s Sky',
    'Half-Life: Alyx'
]
export const RadioButtons = ({game, setGamesList}) => {
    return (
        <div>
        <h2 tabIndex='0'>Which game do you want to play?</h2>
        {gamesList.map((games)=> (
            <label htmlFor="games" tabIndex ='0' key= {games}>
                <input autoFocus
                    name='games'
                    type='radio'
                    value={games}
                    onChange={event => setGamesList(event.target.value)}
                    checked={game === games}
                    required
                />
                {games}
            </label>
        ))} 
        </div>
    )};

import React from 'react'

const gamesList = [
    'Beat Saber',
    'SPARC',
    'Until you Fall',
    'Pavlov',
    'No Mans Sky'
]
export const RadioButtons = ({game, setGamesList}) => {

    return (
        <form>
        What game do you want to play?
        {gamesList.map((games)=> (
            <label key= {games}>
                <input
                    type="radio"
                    value={games}
                    onChange={event => setGamesList(event.target.value)}
                    checked={game === games}
                    required
                />
                {games}
            </label>

        )
        )}
            
        </form>
    )

}

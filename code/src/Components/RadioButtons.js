import React from 'react'

const gamesList = [
    'Beat Saber',
    'SPARC',
    'Until you Fall',
    'Pavlov',
    'No Man\'s Sky'
]
export const RadioButtons = ({game, setGamesList}) => {

    return (
        <form>
        <h2 tabIndex='0'>Which game do you want to play?</h2>
        {gamesList.map((games)=> (
            <label tabIndex ='0' key= {games}>
                <input
                    type='radio'
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

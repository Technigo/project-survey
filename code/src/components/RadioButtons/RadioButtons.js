import React, {useState} from 'react'
import './RadioButtons.css'

const RadioButtons = () =>{
    const GenreGroups = [
        'Thriller',
        'Comedy',
        'Drama',
        'Sci-fi',
        'Animated'
    ]
    const [GenreGroup, setGenreGroup] = useState('')
    return(
        <>
        <h2>My favorite movie genre is?</h2>
        <form onSubmit={(event => event.target.value)}>
            Genre Group:
            {GenreGroups.map(group => (
             <label key={group}> 
                <input
                    type='radio'
                    value={group}
                    onChange={event => setGenreGroup(event.target.value)}
                    checked={GenreGroup === group}
                />
                {group}
             </label>  
             ))}
        </form>
            <p>you like to watch a {GenreGroup} movie</p>
        </>
    )
}

export default RadioButtons
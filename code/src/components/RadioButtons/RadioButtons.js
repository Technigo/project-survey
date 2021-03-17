import React from 'react'
import './RadioButtons.css'

const RadioButtons = ({GenreGroup, setGenreGroup}) =>{
    const GenreGroups = [
        'Thriller',
        'Comedy',
        'Drama',
        'Sci-fi',
        'Animated'
    ]
    // const [GenreGroup, setGenreGroup] = useState('')

    const onChangeGenre = (event) =>{
        setGenreGroup(event.target.value)
    }

    return(
        <>
            <h2>My favorite movie genre is?</h2>
            <form onSubmit={(event => event.target.value)}>
                Genre Group:
                {GenreGroups.map(group => (
                <label htmlFor={group} key={group}> 
                    <input
                        type='radio'
                        value={group}
                        onChange={onChangeGenre}
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
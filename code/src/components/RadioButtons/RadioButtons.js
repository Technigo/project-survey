import React from 'react'
import './RadioButtons.css'


const GenreGroups = [
    'Thriller',
    'Comedy',
    'Drama',
    'Sci-fi',
    'Animated'
]



const RadioButtons = ({GenreGroup, setGenreGroup}) =>{

    const onChangeGenre = (event) =>{
        setGenreGroup(event.target.value)
    }

    return(
        <div>
            <h2>My favorite movie genre is?</h2>
                {GenreGroups.map((group) => (
                    <label htmlFor={group} key={group}> 
                        <input
                            name='group'
                            type='radio'
                            value={group}
                            onChange={onChangeGenre}
                            checked={GenreGroup === group}
                            required
                        />
                        {group}
                    </label>  
                ))}
                {/* <p>you like to watch a {GenreGroup} movie</p> */}
        </div>
    )
}

export default RadioButtons
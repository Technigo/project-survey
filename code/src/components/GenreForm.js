import React from 'react'

export const GenreForm = ({title, genre, setGenre}) => {

    return (
        <article>
        <h1>{title}</h1>
        <select
        onChange={event => setGenre(event.target.value)}
        value={genre}>
        <option value="">Choose your genre:</option>
        <option value="Pop">Pop</option>
        <option value="Rock">Rock</option>
        <option value="Hiphop">Hiphop</option>
        <option value="Country">Country</option>
        <option value="RnB">RnB</option>
        <option value="Jazz">Jazz</option>
        <option value="Blues">Blues</option>
       </select>

       </article> 
 
    );
}


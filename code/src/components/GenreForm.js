import React from 'react'

export const GenreForm = ({genre, setGenre}) => {

    return (
        <article>
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


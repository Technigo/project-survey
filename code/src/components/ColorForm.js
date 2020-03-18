import React from 'react'

const platformGroups = ["Youtube", "Spotify", "Apple Music", "Soundcloud", "Itunes"];

export const ColorForm = ({title, platformGroup, setPlatfromGroup}) => {
    
    return (

     <article className="custom-Cb">
         <h1>{title}</h1>
        {platformGroups.map(platform => (
            <label key={platform}>
              {platform}
              <input 
              type="checkbox"
              value={platform}
              onChange={event => setPlatfromGroup(event.target.value)}
              checked={platformGroup === platform} 
              />
            </label>
        ))}
    </article>

    );
}



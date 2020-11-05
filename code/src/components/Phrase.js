import React from 'react'



export const Phrase = (props) => {
    return (

        <div className="word-container-line">
  
        <h2>Phrase</h2>
        <label>What do you say when scarying kids
          <input
            type="text"
            className="line-phrase"
            maxLength="17"
            onChange={event => props.setPhrase(event.target.value)}
            value={props.phrase}
          />

        </label>

      </div>
    )
}

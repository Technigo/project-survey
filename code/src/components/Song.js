import React from 'react';

export const Song = (props) => {
  return (
    <div className="song-content">
      <h1>you are {props.song}</h1>
      <p className="song-text">{props.text}</p>
      <iframe title={props.song} style={{ borderRadius: '12px' }} src={props.url} width="100%" height="152" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" />

    </div>
  )
}
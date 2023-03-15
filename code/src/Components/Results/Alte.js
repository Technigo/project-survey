/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import '../../index.css';

export const Alte = ({ name, reason, location, feel }) => {
  return (
    <div className="result-wrapper">
      <div className="result-text-div">
        <h1>You got... alté!</h1>
        <p>Great job, {name}! The results are in.</p>
        <p>You often find yourself listening to music to {reason}, and
      your favourite place to listen to music is {location}.
      Most music you listen to could be described as {feel}.
        </p>
        <p>
      For this reason, I've curated a playlist of alternative afrobeats,
      or <b>alté</b>, for you. Alté is a contemporary subgenre of Afrobeats where
      artistic self-expression and individuality is key. Learn more about alté <a href="https://www.dazeddigital.com/music/article/45115/1/introduction-to-nigeria-alte-music-scene" target="_blank" rel="noreferrer">here</a>!
        </p>
      </div>
      <div className="playlist-wrapper">
        <iframe
          title="alté spotify playlist"
          className="spotify-playlist"
          height="50%"
          src="https://open.spotify.com/embed/playlist/3XhJ7Sz7YPdTz04SBg11ZK?utm_source=generator"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy" />
      </div>
    </div>
  );
};
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import '../../index.css';
import './Results.css';

export const RB = ({ name, reason, location, feel, genre }) => {
  return (
    <div className="result-wrapper">
      <div className="result-text-div">
        <h1 className="text-title">You got... Afro-R&B!</h1>
        <p>Great job, {name}! The results are in.<br />
        You often find yourself listening to music to {reason}, and
      your favourite place to listen to music is {location}. Out of the four genres
      I listed, you enjoy {genre} the most.
      Most music you listen to could be described as {feel}.
          <br />
          <br />
      For this reason, I've curated a playlist of afrobeats with an R&B twist for you. Perhaps
      the most globally popular style of afrobeats currently, Afro-R&B boasts some of the biggest
      names in music over the entire continent. Artists like WizKid and Burna Boy dominate
      the Afro-R&B scene and have in the last couple of years had big global breakthroughs,
      helping push afrobeats onto the mainstream Western music scene. If you enjoy R&B,
      I'm sure you'll love the addition of a West African beat and Nigerian/Ghanaian pidgin.
      Learn more about the global rise of afrobeats <a className="text-link" href="https://www.ft.com/content/ac0eb5d4-e2f5-419a-ad2e-9c3b74139b3c" target="_blank" rel="noreferrer">here</a>!
        </p>
      </div>
      <div className="playlist-wrapper">
        <iframe
          title="alté spotify playlist"
          className="spotify-playlist"
          height="50%"
          src="https://open.spotify.com/embed/playlist/3hi7ozkrrKHouLq3QYnjHd?utm_source=generator"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy" />
      </div>
    </div>
  );
};
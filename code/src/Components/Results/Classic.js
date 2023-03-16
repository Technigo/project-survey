/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import '../../index.css';
import './Results.css';

export const Classic = ({ name, reason, location, feel, genre }) => {
  return (
    <div className="result-wrapper">
      <div className="result-text-div">
        <h1 className="text-title">You got... classic afrobeats!</h1>
        <p>Great job, {name}! The results are in.</p>
        <p>You often find yourself listening to music to {reason}, and
      your favourite place to listen to music is {location}. Out of the genres
      I listed, you enjoy {genre} the most.
      Most music you listen to could be described as {feel}.
        </p>
        <p>
      For this reason, I've curated a playlist of afrobeats with an amapiano twist for you.
      Amapiano, meaning "the pianos" in Zulu and Xhosa, is a genre of deep house music
      hailing from South Africa, and it's taken the continent and the rest of the
      world by storm since last year. Naturally, the West African music scene has
      embraced amapiano and created its own spin on it,
      resulting in afrobeats tracks with a hypnotic house beat and the distinctive
      "log drum" sound (listen for the humming and purring wooden sound in the beat).
      Learn more about the genre <a className="text-link" href="https://newsroom.spotify.com/2022-05-31/how-the-world-is-reimagining-amapiano-south-africas-hottest-music-export/" target="_blank" rel="noreferrer">here</a>!
        </p>
      </div>
      <div className="playlist-wrapper">
        <iframe
          title="alté spotify playlist"
          className="spotify-playlist"
          height="50%"
          src="https://open.spotify.com/embed/playlist/5GKf4PHP0Y61yrskOmZsms?utm_source=generator"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy" />
      </div>
    </div>
  );
};
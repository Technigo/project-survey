/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import '../../index.css';
import './Results.css';

export const Classic = ({ name, reason, location, feel, genre }) => {
  return (
    <div className="result-wrapper">
      <div className="result-text-div">
        <h1 className="text-title">You got... classic afrobeats!</h1>
        <p>Great job, {name}! The results are in.<br />
      You often find yourself listening to music to {reason}, and
      your favourite place to listen to music is {location}. Out of the genres
      I listed, you enjoy {genre} the most.
      The music you listen to could be described as {feel}.
          <br />
          <br />
      For this reason, I've curated a playlist of afrobeat classics from the 2010's for you.
      This is the crème de la crème of afrobeats! For anyone who loves the genre,
      this playlist is sure to envoke strong nostalgia. If you're new to afrobeats,
      this is a fantastic starting point! You'll get a glimpse into what afrobeats sounded like
      just as the genre was gaining traction in the rest of the world, and hear afrobeats
      at its most "afrobeats-y".
      Learn more about the roots and rise of the genre <a className="text-link" href="https://www.africanexponent.com/post/18656-africa-in-music-the-meteoric-rise-of-afrobeats" target="_blank" rel="noreferrer">here</a>!
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
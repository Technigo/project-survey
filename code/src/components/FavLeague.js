import React from "react";

export const FavoriteLeague = ({ league, onLeague}) => {
  return (
    <label>
        <div className='drop-down'>
        <h2>What is your favourite football league?</h2>
        
            <select
            onChange={(event) => onLeague(event.target.value)}
            value={league}
            tabIndex="0"
            required
            >
            <option value=''>Select League</option>
            <option value='PremierLeague'>Premier League</option>
            <option value='LaLiga'>La liga</option>
            <option value='SerieA'>Serie A</option>
            <option value='Bundesliga'>Bundesliga</option>    
            <option value='Ligue1'>Ligue 1</option>    
            </select>
        </div>
    </label>
  );
};
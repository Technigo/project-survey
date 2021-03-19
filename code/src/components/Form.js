import React, { useState } from 'react';

import './style.css';
import { Header } from './header';
import { NameQuestion } from './NameQuestion';
import { RadioBtn } from './RadioBtn';
import { Summary } from './summary';
import { FavoriteLeague } from './FavLeague';


export const Form = () => {
    const [name, setName] = useState('');
    const [viewHour, setViewHour] = useState();
    const [league, setLeague] = useState ('');
    const [showSummary, setShowSummary] = useState(false);


    const handleNameChange = (newName) => {
        setName(newName);
      };


    const handleonHourChange  = (newHour) => {
        setViewHour(newHour);
      };


    const handleFavouriteLeague = (newLeague) => {
        setLeague(newLeague);
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        setShowSummary(true);
      };


    return (
        <div className='survey-box'>
            {!showSummary && (
            <form on onSubmit={handleSubmit}>

                <Header />
               
               <NameQuestion 
                    username={name} 
                    onNameChange={handleNameChange} 
                />

               <RadioBtn
                    checked={viewHour}
                    onViewHour={handleonHourChange}
                />

                <FavoriteLeague
                    value={league}
                    onLeague={handleFavouriteLeague}
                />

                
                <div className='button-box'>
                    <button className='btn' type="submit">
                        Submit answers
                    </button>
                </div>
                
            </form>
            )}
            {showSummary && (
                <Summary name={name} checked={viewHour} value={league} />
            )}

        </div> 



        
    );
};

 
import React from 'react';
import Select from '@material-ui/core/Select';

const QuestionFilms = () => {
  return (
    <div>
        <label htmlFor="film">What was your favorite film or adaptation of Pride and Prejudice?</label>        
          <Select id="film" >
            <option value="" disabled selected>Select your favorite</option>
            <option>BBC Tv mini series 1995 with Colin Firth</option>
            <option>Film 2005 with Keira Knightly</option>
            <option>Tv mini series 1967 with Celia Bannerman</option>
            <option>Bridget Jones Diary (2001)</option>
            <option>Pride Prejudice and Zombies (2016)</option>
            <opiton>The Lizzie Bennet Diaries - web series (2012-2013)</opiton>
            <option>None of the above</option>
            <option>None of the above, Pride and Predjudice isn't my favorite.</option>
          </Select>
      </div>
  )
};

export default QuestionFilms;
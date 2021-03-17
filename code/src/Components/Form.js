import React from 'react';


import FavoriteBook from 'components/FavoriteBook';
import HowManyBooks from 'components/HowManyBooks';
import FavoriteGenre from 'components/FavoriteGenre';
import SubmitButton from 'components/SubmitButton';
import Header from 'components/Header'





const Form = () => {

  return (
    <>
    <div className="header-container"><Header text="Book survey"/></div>
    <form className="form-container">

      <HowManyBooks text="How many books do you read in a year?" />
      <FavoriteGenre text="Your favorite genre:"/>
      <FavoriteBook text="Your favorite book:" />
      <SubmitButton />
    </form>
    </>
  )
};


export default Form;
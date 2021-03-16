import React from 'react';


import FavoriteBook from 'Components/FavoriteBook';
import HowManyBooks from 'Components/HowManyBooks';
import FavoriteGenre from 'Components/FavoriteGenre';
import SubmitButton from 'Components/SubmitButton';
import Header from 'Components/Header'


// const [book, setBook] = useState("");


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
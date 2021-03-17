import React, {useState} from 'react'


import FavoriteBook from 'components/FavoriteBook';
import HowManyBooks from 'components/HowManyBooks';
import FavoriteGenre from 'components/FavoriteGenre';
import Header from 'components/Header';
import Summary from './components/Summary';


import './index.css'



export const App = () => {

  const [number, setNumber] = useState("");
  const [favoriteGenre, setFavoriteGenre] = useState("")
  const [book, setBook] = useState("");


  const onNumberChange = (event) => {
    setNumber(event.target.value)
  }


  const onGenreChange = (event) => {
    setFavoriteGenre(event.target.value)
  }

  const onBookChange = (event) => {
    setBook(event.target.value)
  }


  const isSurveyComplete =() => {
    if (number === '') {
      return false
    }

    if (favoriteGenre === ''){
      return false
    }
    if (book === ''){
      return false
    }
    return true
    }

    if (isSurveyComplete()) {
      console.log(`done!`);
    }

  return (
    <div className="main-container">

        <Header/>

        <form className="form-container">

          <section className="many" id="many">
            <HowManyBooks
            text="How many books do you read in a year?"
            number={number}
            onNumberChange={onNumberChange}
            />
          </section>

          <section className="genre" id="genre">
            <FavoriteGenre
            text="Your favorite genre:"
            favoriteGenre={favoriteGenre}
            onGenreChange={onGenreChange}
            />
          </section>

          <section className="favorite" id="favorite">
            <FavoriteBook
            text="Your favorite book is:"
            book={book}
            onBookChange={onBookChange}
            />
          </section>

         <section className="summary" id="summary">
          <Summary
            textHeader="Thank you for your time!"
            numberOfBooks={number}
            favGenre={favoriteGenre}
            favBook={book}
            />
         </section>
      </form>
    </div>
  )
}

import React from 'react'


import FavoriteBook from 'Components/FavoriteBook';
import HowManyBooks from 'Components/HowManyBooks';
import FavoriteGenre from 'Components/FavoriteGenre';
import Header from 'Components/Header'


import './index.css'



export const App = () => {
  // const [number, setNumber] = useState("");
  return (
    <div className="main-container">

        <Header/>

        <form className="form-container">

        <section className="many" id="many">
          <HowManyBooks
          text="How many books do you read in a year?" />
        </section>

        <section className="genre" id="genre">
          <FavoriteGenre text="Your favorite genre:"/>
        </section>

        <section className="favorite" id="favorite">
          <FavoriteBook text="Your favorite book:" />
        </section>
      </form>
    </div>
  )
}

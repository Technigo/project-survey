import React, { useState } from 'react'
import { ProgressBar } from "./ProgressBar"
import "./app.css"
import { RadioButtons } from "./RadioButtons"
export const App = () => {
  const [section, setSection] = useState(0)
  const [book, setBook] = useState()
  const [number, setNumber] = useState()
  const [genre, setGenre] = useState()
  const genreGroups = ["Science Fiction", "Fantasy", "Detective", "Poetry", "Classics"]
  const handleSubmit = event => {
    event.preventDefault();
    setSection(section + 1)
  }

  return (
    <section className="container">
      <section className="imageFilter"
      ></section>
      <form onSubmit={handleSubmit} >

        {section === 0 &&
          <div>
            <p className="label-text"><span className="arrow">→</span>First off, what's your favourite genre of book?</p>
            <ul>
              <RadioButtons genreGroups={genreGroups} genre={genre} setGenre={setGenre} />
            </ul>
          </div>


        }
        {section === 1 &&

          <label  >
            <p className="label-text"><span className="arrow">→</span>And what is your favourite book?</p>
            <input className="text-field" type="text" value={book} onChange={(event) => setBook(event.target.value)} required />
          </label>

        }
        {section === 2 &&
          <label className="label-wrapper">
            <p className="label-text"><span className="arrow">→</span>Lastly, how many books did you read last year?</p>
            <div className="drop-down">
              <select className="drop-down-options" required onChange={(event) => setNumber(event.target.value)} value={number}>
                <option value="">Pick a number</option>
                <option value="0-10">0-10</option>
                <option value="11-20">11-20</option>
                <option value="21-30">21-30</option>
                <option value="31-40">31-40</option>
                <option value="41-50">41-50</option>
                <option value="More than 50">More than 50</option>
              </select>
            </div>
          </label>

        }
        {section < 3 &&
          <article className="button-container">
            <button className="button" type="submit">Next →  </button>
          </article>
        }


      </form>
      {section === 3 &&
        <div class="user-response">
          <p className="label-text summary"><span className="arrow">→</span>Your favourite genre is {genre}. </p>
          <p className="label-text summary"><span className="arrow">→</span>Your favourite book is: {book}</p>
          <p className="label-text summary"><span className="arrow">→</span>Last year you read {number} books.</p>
          <button className="button" onClick={() => window.location.reload(false)}>To Beginning ⏎  </button>
        </div>

      }
      <article>
        <ProgressBar width={section} />

      </article>
    </section>
  )
}

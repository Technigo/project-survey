import React, { useState } from 'react'
import { ProgressBar } from "./ProgressBar"
import "./app.css"
import { RadioButtons } from "./RadioButtons"
import { TextField } from 'TextField'
import { DropDown } from 'DropDown'
import { NextButton } from 'NextButton'
import { Summary } from 'Summary'
export const App = () => {
  const [section, setSection] = useState(0)
  const [book, setBook] = useState('')
  const [number, setNumber] = useState('')
  const [genre, setGenre] = useState('')
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
          <article>
            <p className="label-text"><span className="arrow">→</span>First off, what's your favourite genre of book?</p>
            <ul>
              <RadioButtons genreGroups={genreGroups} genre={genre} setGenre={setGenre} />
            </ul>
          </article>
        }
        {section === 1 &&

          <TextField book={book} setBook={setBook} />

        }
        {section === 2 &&
          <DropDown number={number} setNumber={setNumber} />

        }
        {section < 3 &&
          <NextButton book={book} number={number} genre={genre} section={section} />
        }

        {section === 3 &&
          <Summary genre={genre} book={book} number={number} />

        }
      </form>

      <article>
        <ProgressBar width={section} />

      </article>
    </section>
  )
}

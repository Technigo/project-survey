import { useState } from 'react'
import React from 'react'

export const App = () => {

  const dinnerTime = ["13", "16", "18"]

  const [name, setName] = useState('name')
  const [food, setFood] = useState('')
  const [candy, setCandy] = useState('')
  const [wantsChristmasGift, setWantsChristmasGift] = useState(false)
  const [time, setTime] = useState()




  return (
    <div>
      <div>
        <h1>How, how, Santa wants your input</h1>
      </div>
      <form>
        <h2>Merry Christmas </h2>
        <section>
          <input
            type="text"
            onChange={event => setName(event.target.value)}
            value={name}
          />
        </section>

        <section>
          <h2>What do you want to eat,{name}? </h2>
          <select
            onChange={event => setFood(event.target.value)}
            value={food} >
            <option value=""> pick your favo </option>
            <option value="Julskinka"> Julskinka </option>
            <option value="Jansson"> Jansson </option>
            <option value="Omelett"> Omelett </option>
            <option value="Senapssill"> Senapssill </option>
          </select>
          <p>my favorite is {food}!</p>
        </section>

        <section>
          <h2>And for candies?</h2>
          <select
            onChange={event => setCandy(event.target.value)}
            value={candy} >
            <option value=""> pick your favo </option>
            <option value="Knäck"> Knäck </option>
            <option value="Choclate"> Choclate </option>
            <option value="Mozartkugeln"> Mozartkugeln </option>
            <option value="Kola"> Kola </option>
          </select>
          <p>Yum, yum {candy}!</p>
        </section>

        <section>
          <h2>Have you sent you wish list to, Santa?</h2>
          <label>
            <input
              type="checkbox"
              checked={wantsChristmasGift}
              onChange={event => setWantsChristmasGift(event.target.checked)}
              value={name}
            />
          </label>
        </section>

        <section>
          <h2>What time do you want to eat Christmas dinner?</h2>
          {dinnerTime.map(eat => (
            <label key={eat}>
              <input
                type="radio"
                value={eat}
                onChange={event => setTime(event.target.value)}
                checked={time === eat}
              />
              {eat}
            </label>
          ))}
        </section>

        <h2>Merry Christmas,{name} </h2>

      </form>


    </div >
  )
}

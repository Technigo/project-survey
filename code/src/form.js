import React from 'react'
import './form.css'

export const Form = ({ feeling, setFeeling, activity, setActivity, sleep, setSleep, handleSubmit }) => (
  <form onSubmit={handleSubmit} className="form">
    <label className="dropdown">
      How are you feeling today?
      <select value={feeling} onChange={event => setFeeling(event.target.value)} required className="select">
        <option value="" disabled selected> </option>
        <option value="bad">Not so good</option>
        <option value="okay">Okay</option>
        <option value="good">Good</option>
        <option value="amazing">Amazing</option>
      </select>
    </label>

    <label className="dropdown">
      What is your favourite activity to make you feel good?
      <select value={activity} onChange={event => setActivity(event.target.value)} required className="select">
        <option value="" disabled selected> </option>
        <option value="walk">Go for a nice long walk</option>
        <option value="meditate">Meditate</option>
        <option value="read">Read a book</option>
        <option value="talkToFriend">Talk to a friend</option>
      </select>
    </label>

    <div className="sleepDuration">
      <p>How much sleep have you gotten today?</p>

      <label className="radio">
        <input
          type="radio"
          value="less than 5 hours"
          onChange={event => setSleep(event.target.value)}
          checked={sleep === "less than 5 hours"}
        />
        Less than 5 hours
      </label>

      <label className="radio">
        <input
          type="radio"
          value="5-7 hours"
          onChange={event => setSleep(event.target.value)}
          checked={sleep === "5-7 hours"}
        />
        5-7 hours
      </label>

      <label className="radio">
        <input
          type="radio"
          value="7-9 hours"
          onChange={event => setSleep(event.target.value)}
          checked={sleep === "7-9 hours"}
        />
        7-9 hours
      </label>

      <label className="radio">
        <input
          type="radio"
          value="more than 9 hours"
          onChange={event => setSleep(event.target.value)}
          checked={sleep === "more than 9 hours"}
        />
        More than 9 hours
      </label>
    </div>

    <button type="submit" className="submit">Complete daily check-in!</button>
  </form>
)
import React from 'react'

export const Prefer = ({ prefers, setPrefers, counterFromApp, setCounter }) => {
  const handlePreferChange = (event) => {
    setPrefers(event.target.value);
    setCounter(counterFromApp + 1);
    console.log('prefers: ', event.target.value);
  }

  return (
    <div>

      <section className="dropDown">
        <h2>Select your preferred activity</h2>
        <select className="dropMenu" onChange={handlePreferChange} value={prefers} aria-label="Select your preferred activity">
          <option value="" className="Choose">Choose an option</option>
          <option value="books" className="books">Books & plants 🪴📚</option>
          <option value="surf" className="surf">Surf &palmtrees 🏄🏿‍♀️ 🏝️</option>
          <option value="people" className="people">People, fika & walks 👨🏻‍🦽🚶🏾‍♀️</option>
          <option value="tent" className="tents">Tents, hikes & fire 🏕️</option>

        </select>
      </section>
    </div>
  )
}
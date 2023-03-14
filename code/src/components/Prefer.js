import React from 'react'

export const Prefer = ({ prefer, setPrefer }) => {
  const handlePreferChange = (event) => {
    setPrefer(event.target.value);
  }
  return (
    <div>

      <section className="dropDown">
        <h2>What do you prefer</h2>
        <select className="dropMenu" onChange={handlePreferChange} value={prefer}>
          <option value="" className="Choose">Choose an option</option>
          <option value="b&P" className="books">Books & plants 🪴📚</option>
          <option value="surf" className="surf">Surf &palmtrees🏄🏿‍♀️ 🏝️</option>
          <option value="people" className="people">People, fika & walks 👨🏻‍🦽🚶🏾‍♀️</option>
          <option value="tent" className="tents">Tents, hikes & fire 🏕️</option>

        </select>
      </section>
    </div>
  )
}
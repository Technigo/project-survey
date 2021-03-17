import React, {useState} from 'react'
import './index.css'

export const App = () => {

const furArray = ["long hair", "short hair", "naked"];
const [animalFur, setAnimalFur] = useState("");
const [gender, setGender] = useState("");
const [color, setColor] = useState("");
const [name, setName] = useState("");
const [showSummary, setShowSummary] = useState(false);
const handleSubmit = event => {
  event.preventDefault();
  setShowSummary(true);
};

return (
<div className="survey-section">
  <header>
    <h1>Answer a few questions and you can win 100 cat food burkar</h1>
  </header>

  <form className="form" onSubmit={handleSubmit}>
    
    <div>
      What kinds of cat do you like?
      {furArray.map(fur => (
        <label key={fur}>
          <input
            type='radio'
            value={fur}
            onChange={event => setAnimalFur(event.target.value)}
            checked={animalFur === fur}
            required
          />
          {fur}
        </label>
      ))}
    </div>
    
    <div>
      <label>Cats gender</label>
      <select
        id="gender"
        required
        onChange={event => setGender(event.target.value)}>
        <option value="">Select</option>
        <option value="Female">Female</option>
        <option value="Male">Male</option>
        <option value="either female or male">Does not matter</option>
      </select>
    </div>

    <div>
      <label>What color do you like best on a cat</label>
      <input
      type='text'
      onChange={event => setColor(event.target.value)}
      required
      value={color}
      />
    </div>

    <div>
      <label>Your cats name</label>
      <input
      type='text'
      onChange={event => setName(event.target.value)}
      required
      value={name}
      />
    </div>
   <button type="submit">Send</button>
  </form>

  {showSummary && <section className='summary'>
    <h2>Thank you for your time</h2>
    <p>You like cats with {animalFur} that is {color}. You want a {gender} cat with the name {name}.</p>
  
    
  </section>
  }

</div>
)
}
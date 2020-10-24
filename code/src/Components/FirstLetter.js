import React from 'react'

const FirstLetter = ({ yourLetter, onLetterChange }) => {


  return (
  
        <div className="firstLetter">
          <h3 tabIndex="0">FIRST LETTER OF YOUR NAME</h3>
          <select className="firstLetter-text" tabIndex="0" value={yourLetter} onChange={e => onLetterChange(e.target.value)}>
            <option tabIndex="0" value="">SELECT HERE</option>
            <option tabIndex="0" value="Toilet cleaner">A</option>
            <option tabIndex="0" value="Producer">B</option>
            <option tabIndex="0" value="Teacher">C</option>
            <option tabIndex="0" value="Donut-eater">D</option>
            <option tabIndex="0" value="Photographer">E</option>
            <option tabIndex="0" value="Astronaut">F</option>
            <option tabIndex="0" value="Model">G</option>
            <option tabIndex="0" value="Writer">H</option>
            <option tabIndex="0" value="Developer">I</option>
            <option tabIndex="0" value="Politician">J</option>
            <option tabIndex="0" value="DJ">K</option>
            <option tabIndex="0" value="Unemployed">L</option>
            <option tabIndex="0" value="Librarian">M</option>
            <option tabIndex="0" value="Ballerina">N</option>
            <option tabIndex="0" value="Chef">O</option>
            <option tabIndex="0" value="Zookeeper">P</option>
            <option tabIndex="0" value="Lawyer">Q</option>
            <option tabIndex="0" value="Artist">R</option>
            <option tabIndex="0" value="Judge">S</option>
            <option tabIndex="0" value="Gamer">T</option>
            <option tabIndex="0" value="Dentist">U</option>
            <option tabIndex="0" value="Painter">V</option>
            <option tabIndex="0" value="Athlete">W</option>
            <option tabIndex="0" value="Psychologist">X</option>
            <option tabIndex="0" value="Pilot">Y</option>
            <option tabIndex="0" value="Scientist">Z</option>
            <option tabIndex="0" value="Stylist">Å</option>
            <option tabIndex="0" value="Reporter">Ä</option>
            <option tabIndex="0" value="Architect">Ö</option>
          </select>
        </div>
  )
}

export default FirstLetter

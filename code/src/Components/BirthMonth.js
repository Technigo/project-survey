import React from 'react'

const BirthMonth = ({ yourMonth, onMonthChange }) => {

  return (
    <div className="birthMonth">
      <h3 tabIndex="0">BIRTH MONTH</h3>

      <div className="radiobutton-section1">
        <div className="radiobutton">
          <label className="radiobutton-css" tabIndex="0" htmlFor="january">JAN</label>
          <input
            tabIndex="0"
            id="Professional"
            type="radio"
            checked={yourMonth.includes('Professional')}
            onChange={() => onMonthChange('Professional')}
          />
        </div>

        <div className="radiobutton">
          <label className="radiobutton-css" tabIndex="0" htmlFor="february">FEB</label>
          <input
            tabIndex="0"
            id="Crazy"
            type="radio"
            checked={yourMonth.includes('Crazy')}
            onChange={() => onMonthChange('Crazy')}
          />
        </div>

        <div className="radiobutton">
          <label className="radiobutton-css" tabIndex="0" htmlFor="mars">MARS</label>
          <input
            tabIndex="0"
            id="Evil"
            type="radio"
            checked={yourMonth.includes('Evil')}
            onChange={() => onMonthChange('Evil')}
          />
        </div>

        <div className="radiobutton">
          <label className="radiobutton-css" tabIndex="0" htmlFor="april">APRIL</label>
          <input
            tabIndex="0"
            id="Drunk"
            type="radio"
            checked={yourMonth.includes('Drunk')}
            onChange={() => onMonthChange('Drunk')}
          />
        </div>
        </div>

        <div className="radiobutton-section2">
        <div className="radiobutton">
          <label className="radiobutton-css" tabIndex="0" htmlFor="maj">MAY</label>
          <input
            tabIndex="0"
            id="Ugly"
            type="radio"
            checked={yourMonth.includes('Ugly')}
            onChange={() => onMonthChange('Ugly')}
          />
        </div>

        <div className="radiobutton">
          <label className="radiobutton-css" tabIndex="0" htmlFor="juni">JUNE</label>
          <input
            tabIndex="0"
            id="Celebrity"
            type="radio"
            checked={yourMonth.includes('Celebrity')}
            onChange={() => onMonthChange('Celebrity')}
          />
        </div>
      

        <div className="radiobutton">
          <label className="radiobutton-css" tabIndex="0" htmlFor="juli">JULI</label>
          <input
            tabIndex="0"
            id="Scary"
            type="radio"
            checked={yourMonth.includes('Scary')}
            onChange={() => onMonthChange('Scary')}
          />
        </div>

        <div className="radiobutton">
          <label className="radiobutton-css" tabIndex="0" htmlFor="august">AUG</label>
          <input
            tabIndex="0"
            id="Grumpy"
            type="radio"
            checked={yourMonth.includes('Grumpy')}
            onChange={() => onMonthChange('Grumpy')}
          />
        </div>
        </div>

        <div className="radiobutton-section3">
        <div className="radiobutton">
          <label className="radiobutton-css" tabIndex="0" htmlFor="september">SEP</label>
          <input
            tabIndex="0"
            id="Wild"
            type="radio"
            checked={yourMonth.includes('Wild')}
            onChange={() => onMonthChange('Wild')}
          />
        </div>

        <div className="radiobutton">
          <label className="radiobutton-css" tabIndex="0" htmlFor="october">OCT</label>
          <input
            tabIndex="0"
            id="Weird"
            type="radio"
            checked={yourMonth.includes('Weird')}
            onChange={() => onMonthChange('Weird')}
          />
        </div>

        <div className="radiobutton">
          <label className="radiobutton-css" tabIndex="0" htmlFor="november">NOV</label>
          <input
            tabIndex="0"
            id="Sexy"
            type="radio"
            checked={yourMonth.includes('Sexy')}
            onChange={() => onMonthChange('Sexy')}
          />
        </div>

        <div className="radiobutton">
          <label className="radiobutton-css" tabIndex="0" htmlFor="december">DEC</label>
          <input
            tabIndex="0"
            id="Macho"
            type="radio"
            checked={yourMonth.includes('Macho')}
            onChange={() => onMonthChange('Macho')}
          />
        </div>
      </div>  
    </div>

  )
}

export default BirthMonth

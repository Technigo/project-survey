import React from 'react'

const BirthMonth = ({ yourMonth, onMonthChange }) => {

  return (
    <div className="birthMonth">
      <h3 tabIndex="0">BIRTH MONTH</h3>

      <div className="radiobtn-box">
        <h2>Do you like cheese?</h2>
        {likeCheese.map(like => (
          <label key={like} tabIndex="0">
            <input
              type="radio"
              id={like}
              name="like"
              value={like}
              onChange={(event) =>  onlikeOptionChange(event.target.value)}
              checked={likeOption === like}
              // required
            />
            {like}
          </label>
        ))}
        </div> 

      <div className="radiobutton-section1">
        <div className="radiobutton">
          <label className="radiobutton-css" tabIndex="0" htmlFor="january">JAN</label>
          <input
            tabIndex="0"
            id="january"
            type="radio"
            checked={yourMonth.includes('Professional')}
            onChange={() => onMonthChange('Professional')}
          />
        </div>

        <div className="radiobutton">
          <label className="radiobutton-css" tabIndex="0" htmlFor="february">FEB</label>
          <input
            tabIndex="0"
            id="february"
            type="radio"
            checked={yourMonth.includes('Crazy')}
            onChange={() => onMonthChange('Crazy')}
          />
        </div>

        <div className="radiobutton">
          <label className="radiobutton-css" tabIndex="0" htmlFor="mars">MARS</label>
          <input
            tabIndex="0"
            id="mars"
            type="radio"
            checked={yourMonth.includes('Evil')}
            onChange={() => onMonthChange('Evil')}
          />
        </div>

        <div className="radiobutton">
          <label className="radiobutton-css" tabIndex="0" htmlFor="april">APRIL</label>
          <input
            tabIndex="0"
            id="april"
            type="radio"
            checked={yourMonth.includes('Drunk')}
            onChange={() => onMonthChange('Drunk')}
          />
        </div>
        </div>

        <div className="radiobutton-section2">
        <div className="radiobutton">
          <label className="radiobutton-css" tabIndex="0" htmlFor="may">MAY</label>
          <input
            tabIndex="0"
            id="may"
            type="radio"
            checked={yourMonth.includes('Ugly')}
            onChange={() => onMonthChange('Ugly')}
          />
        </div>

        <div className="radiobutton">
          <label className="radiobutton-css" tabIndex="0" htmlFor="june">JUNE</label>
          <input
            tabIndex="0"
            id="june"
            type="radio"
            checked={yourMonth.includes('Celebrity')}
            onChange={() => onMonthChange('Celebrity')}
          />
        </div>
      

        <div className="radiobutton">
          <label className="radiobutton-css" tabIndex="0" htmlFor="juli">JULI</label>
          <input
            tabIndex="0"
            id="juli"
            type="radio"
            checked={yourMonth.includes('Scary')}
            onChange={() => onMonthChange('Scary')}
          />
        </div>

        <div className="radiobutton">
          <label className="radiobutton-css" tabIndex="0" htmlFor="august">AUG</label>
          <input
            tabIndex="0"
            id="august"
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
            id="september"
            type="radio"
            checked={yourMonth.includes('Wild')}
            onChange={() => onMonthChange('Wild')}
          />
        </div>

        <div className="radiobutton">
          <label className="radiobutton-css" tabIndex="0" htmlFor="october">OCT</label>
          <input
            tabIndex="0"
            id="october"
            type="radio"
            checked={yourMonth.includes('Weird')}
            onChange={() => onMonthChange('Weird')}
          />
        </div>

        <div className="radiobutton">
          <label className="radiobutton-css" tabIndex="0" htmlFor="november">NOV</label>
          <input
            tabIndex="0"
            id="november"
            type="radio"
            checked={yourMonth.includes('Sexy')}
            onChange={() => onMonthChange('Sexy')}
          />
        </div>

        <div className="radiobutton">
          <label className="radiobutton-css" tabIndex="0" htmlFor="december">DEC</label>
          <input
            tabIndex="0"
            id="december"
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

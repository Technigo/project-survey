import React from 'react'

const Body = () => {
  return (
    <div className="survey-section">
      <div className="survey-title">
        <h2>ABOUT INSTAGRAM</h2>
      </div>

      <form className="form-personinfo">
        <div className="gender">
          <h3>GENDER</h3>
          <label>
            <input 
            type="radio" 
            value="male"></input>
             MALE
          </label>

          <label>
            <input 
            type="radio" 
            value="female"></input>
            FEMALE
          </label>

          <label>
            <input 
            type="radio" 
            value="other"></input>
            I DON'T WANT TO DEFINE MYSELF
          </label>
        </div>

          <div className="age">
            <h3>AGE</h3>
            <input>
            </input>
          </div>

          <div className="robot">
            <h3>ARE U A ROBOT?</h3>
            <select>
              <option value="">SELECT ANSWER</option>
            </select>
          </div>

      </form>

      <form className="form-questions">
        <div className="question-1">
          <h4>1. WHAT DO YOU PREFER SEEING ON YOUR INSTAGRAM?</h4>
          <label>
            <input 
            type="radio" 
            value="male"></input>
             Your friends & family's life
          </label>

          <label>
            <input 
            type="radio" 
            value="female"></input>
            Influencers, celebrities, people u don't know but inspirer's you - life
          </label>
        </div>

          <div className="question-2">
            <h4>2. IF U COULD ONLY PICK ONE OF THESE ACCOUNTS TO FOLLOW FOR THE REST OF YOUT LIFE - WHAT WOULD U PICK?</h4>
            <select>
              <option value="">SELECT ANSWER</option>
              <option value="accounts">Influencers/artists accounts</option>
              <option value="accounts">Music accounts</option>
              <option value="accounts">Tech accounts</option>
              <option value="accounts">Movie accounts</option>
              <option value="accounts">Friends accounts</option>
              <option value="accounts">Work accounts</option>
              <option value="accounts">Sports accounts</option>
              <option value="accounts">Inspirational accounts</option>
              <option value="accounts">I would pick to not have Instagram at all</option>
            </select>
          </div>

          <div className="question-3">
            <h4>3. PLEASE WRITE ONE ACCOUNT YOU COULDN'T LIVE WITHOUT FOLLOWING...</h4>
            <input>
            </input>
          </div>

          <div className="question-4">
            <h4>4. WHY DO YOU HAVE INSTAGRAM?</h4>
            <input>
            </input>
          </div>

      </form>

      <button class="form-submit" type="submit"><span>SUBMIT</span></button>
    </div>
  )
}

export default Body

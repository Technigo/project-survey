import React, { useState } from 'react'
import { Header } from './header'
import { Dropdown } from './dropdown'
import { RadioButton } from './radiobutton'
import { FreeText } from './freetext'
import { TextBox } from './textbox'
import { Checkbox } from './checkbox'
import { Button } from './button'
import { Summary } from './summary'

const locations = ['Stockholm', 'Åre', 'Visby']
const amountGuests = ['1', '2', '3', '4', '5', '6', '7', '8'];
const bookDay = ['Thursday', 'Friday', 'Saturday', 'Sunday'];
const dinnerTimes = ['18.00', '18.30', '19.00', '19.30', '20.00', '20.30', '21.00', '21.30', '22.00'];

/* let activeQuestion = 1;

const previousQuestion = () => {
  console.log('bakåt', activeQuestion)
  if (activeQuestion > 1)
  setActiveQuestion(activeQuestion--;)
}

const nextQuestion = () => {
  console.log('framåt', activeQuestion)
  if (activeQuestion < 6)
  setActiveQuestion(activeQuestion++;)
} */

export const App = () => {
  const [activeQuestion, setActiveQuestion] = useState(1);
  const [showSummary, setShowSummary] = useState(false);
  const [location, setLocation] = useState('');
  const [guests, setGuests] = useState('');
  const [day, setDay] = useState('');
  const [dinnerTime, setDinnerTime] = useState('');
  const [preferences, setPreferences] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [terms, setTerms] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    setShowSummary(true);
  }

  return (
    <div className='content-container'>
        {!showSummary && <div>
            <Header />

            <form onSubmit={handleSubmit}>
              {activeQuestion === 1 &&
                <Dropdown dropdownItem={location} setDropdownItem={setLocation} array={locations} question={`Select the restaurant you'd like to visit below, to start your booking!`} title={'Select location:'} />
              }
              {activeQuestion === 2 &&
                <RadioButton arrayItem={guests} setArrayItem={setGuests} array={amountGuests} name={'guests'} question={'How many will you be?'} />
              }
              {activeQuestion === 3 &&
                <RadioButton arrayItem={day} setArrayItem={setDay} array={bookDay} name={'day'} question={'Select a date:'} />
              }
              {activeQuestion === 4 &&
                <RadioButton arrayItem={dinnerTime} setArrayItem={setDinnerTime} array={dinnerTimes} name={'dinnerTime'} question={'Select a time:'} />
              }
              {activeQuestion === 5 &&
                <FreeText text={preferences} setText={setPreferences} question={'Please let us know if you have any allergies, food preferences or anything else you want us to know:'} />
              }
              {activeQuestion === 6 &&
                <div>
                  <TextBox text={name} setText={setName} title={'Booking name:'} placeholder={'Name'} type={'text'} />
                  <TextBox text={email} setText={setEmail} title={'Email:'} placeholder={'user@domain.com'} type={'email'} />
                  <Checkbox checkbox={terms} setCheckbox={setTerms} text={'I agree to the Terms and Conditions of Elsita & Alfredo'} />
                  <Button type={'submit'} title={'Submit'} style={'submit-button'} item={location, guests, day, dinnerTime, preferences, name, email, terms} />
                </div>
              }
            </form>

            <div className='button-container'>
              <Button clickFunction={() => activeQuestion > 1 ? setActiveQuestion(activeQuestion - 1) : null} title={'Previous question'} style={'index-button'} />
              <Button clickFunction={() => activeQuestion < 6 ? setActiveQuestion(activeQuestion + 1) : null} title={'Next question'} style={'index-button'} item={location} />
            </div>
            
          </div>
        }

        {showSummary && <Summary 
            name={name}
            day={day}
            dinnerTime={dinnerTime}
            guests={guests}
            location={location}
          />
        }
    </div>
  );
};


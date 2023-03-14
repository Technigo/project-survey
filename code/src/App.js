/* eslint-disable jsx-a11y/label-has-associated-control */
import Button from 'components/Button';
import React, { useState } from 'react';

const checkbox = [
  'replacement',
  'donation',
  'reimbursement'
]

export const App = () => {
  /* const [exampleVariable, setExampleVariable] = useState('initial_value'); */
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [foxtype, setFoxtype] = useState('');
  const [payment, setPayment] = useState('');
  // console.log(exampleVariable);
  // 1 > 2 && 0 == 0
  // const handleNextClick = () => {
  //   console.log('counter before increase', counter);
  //   setCounter(counter + 1);
  //   console.log('counter after increase', counter);
  // }
  return (
    <div className="parent-container">
      {/* <button type="button" onClick={() => setExampleVariable('test')}>test btn</button>
      <p>{exampleVariable}</p> */}
      {counter === 0 && (
        <div className="child1">
          <h2>Hello dear customer!</h2>
          <p>To proceed with the reclamation survey please click below</p>
          <Button counter={counter} setCounter={setCounter} />
        </div>)}
      {counter === 1 && (
        <div className="child1">
          <p>What is your name?</p>
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
          <Button counter={counter} setCounter={setCounter} />
        </div>)}
      {counter >= 2 && (
        <div className="child1">
          <p>Your name is:</p>
          <h4>{name}</h4>
          <select className="selectFox" value={foxtype} onChange={(event) => setFoxtype(event.target.value)}>
            <option value="" defaultValue disabled>Your purchase</option>
            <option value="redfox">Vulpes vulpes, red fox</option>
            <option value="capefox">Vulpes chama, Cape fox</option>
            <option value="fennecfox">Vulpes zerda, Fennec fox</option>
          </select>
          <Button counter={counter} setCounter={setCounter} />
        </div>
      )}
      {counter >= 3 && (
        <div className="child1">
          <p>Your name is:</p>
          <h4>{name}</h4>
          <p>Your purchase:</p>
          <h4>{foxtype}</h4>
          <p>When did you make your purchase?</p>
          <input type="date" value={date} onChange={(event) => setDate(event.target.value)} />
          <Button counter={counter} setCounter={setCounter} />
        </div>
      )}
      {counter >= 4 && (
        <div className="child1">
          <p>Your name is:</p>
          <h4>{name}</h4>
          <p>Your purchase:</p>
          <h4>{foxtype}</h4>
          <p>Date of purchase:</p>
          <h4>{date}</h4>
          <p>In what manner would you like to be reimbursed?</p>
          <form>
  Choice of reimbursement:
            {checkbox.map((choice) => (
              <label key={choice}>
                <input
                  type="radio"
                  value={choice}
                  onChange={(event) => setPayment(event.target.value)}
                  checked={payment === choice} />
                {choice}
              </label>
            ))}
          </form>
          <Button counter={counter} setCounter={setCounter} />
        </div>
      )}
      {counter >= 5 && (
        <div className="child1">
          <p>Your name is:</p>
          <h4>{name}</h4>
          <p>Your purchase:</p>
          <h4>{foxtype}</h4>
          <p>Choice of reimbursement:</p>
          <h4>{payment}</h4>
          <p>Would you like to opt for targeted discounts and special offers ahead?</p>
          {/* <input type="checkbox" value={date} onChange={(event) => setDate(event.target.value)} /> */}
          <Button counter={counter} setCounter={setCounter} />
        </div>
      )}
      <div className="child2">
        <img src="" alt="a fox in the wild" />
      </div>
    </div>
  );
}

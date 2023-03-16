/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import SubmitScreen from 'components/SubmitScreen';
import RightBox from 'components/RightBox';
import Page0 from 'components/Page0'
import Page1 from 'components/Page1';
import Page2 from 'components/Page2';
import Page3 from 'components/Page3';
import Page4 from 'components/Page4';
import Page5 from 'components/Page5';
import Page6 from 'components/Page6';
import Page7 from 'components/Page7';
import CountProgress from 'components/CountProgress';

export const App = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [foxtype, setFoxtype] = useState('');
  const [payment, setPayment] = useState('');
  const [yesNews, setYesNews] = useState(false);
  const [satisfaction, setSatisfaction] = useState('');

  return (
    <div className="parent-container">
      <div className="leftbox">
        {counter === 0 && (
          <Page0
            counter={counter}
            setCounter={setCounter} />
        )}
        {counter === 1 && (
          <Page1
            counter={counter}
            setCounter={setCounter}
            name={name}
            setName={setName} />
        )}
        {counter === 2 && (
          <Page2
            counter={counter}
            setCounter={setCounter}
            foxtype={foxtype}
            setFoxtype={setFoxtype} />
        )}
        {counter === 3 && (
          <Page3
            counter={counter}
            setCounter={setCounter}
            date={date}
            setDate={setDate} />
        )}
        {counter === 4 && (
          <Page4
            counter={counter}
            setCounter={setCounter}
            payment={payment}
            setPayment={setPayment} />
        )}
        {counter === 5 && (
          <Page5
            counter={counter}
            setCounter={setCounter}
            yesNews={yesNews}
            setYesNews={setYesNews} />
        )} {counter === 6 && (
          <Page6
            counter={counter}
            setCounter={setCounter}
            satisfaction={satisfaction}
            setSatisfaction={setSatisfaction} />
        )} {counter === 7 && (
          <Page7
            counter={counter}
            setCounter={setCounter}
            name={name}
            foxtype={foxtype}
            date={date}
            payment={payment}
            yesNews={yesNews}
            satisfaction={satisfaction} />
        )}
        {counter === 8 && (
          <SubmitScreen
            name={name}
            foxtype={foxtype}
            date={date}
            payment={payment}
            yesNews={yesNews}
            satisfaction={satisfaction} />
        )}
       {/*  <CountProgress counter={counter} /> */}
      </div>
      <RightBox />
    </div>
  );
}

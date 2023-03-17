/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import SubmitScreen from 'components/SubmitScreen';
import LogoBox from 'components/LogoBox';
import Welcome from 'components/Welcome'
import NameQ from 'components/NameQ';
import FoxTypeQ from 'components/FoxTypeQ';
import DateQ from 'components/DateQ';
import PaymentQ from 'components/PaymentQ';
import YesNewsQ from 'components/YesNewsQ';
import SatisfactionQ from 'components/SatisfactionQ';
import ConfirmQ from 'components/ConfirmQ';
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
      <div className="textbox">
        {counter === 0 && (
          <Welcome
            counter={counter}
            setCounter={setCounter} />
        )}
        {counter === 1 && (
          <NameQ
            counter={counter}
            setCounter={setCounter}
            name={name}
            setName={setName} />
        )}
        {counter === 2 && (
          <FoxTypeQ
            counter={counter}
            setCounter={setCounter}
            foxtype={foxtype}
            setFoxtype={setFoxtype} />
        )}
        {counter === 3 && (
          <DateQ
            counter={counter}
            setCounter={setCounter}
            date={date}
            setDate={setDate} />
        )}
        {counter === 4 && (
          <PaymentQ
            counter={counter}
            setCounter={setCounter}
            payment={payment}
            setPayment={setPayment} />
        )}
        {counter === 5 && (
          <YesNewsQ
            counter={counter}
            setCounter={setCounter}
            yesNews={yesNews}
            setYesNews={setYesNews} />
        )} {counter === 6 && (
          <SatisfactionQ
            counter={counter}
            setCounter={setCounter}
            setSatisfaction={setSatisfaction} />
        )} {counter === 7 && (
          <ConfirmQ
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
        {counter > 0 && counter < 8 ? <CountProgress counter={counter} /> : ''}
      </div>
      <LogoBox />
    </div>
  );
}

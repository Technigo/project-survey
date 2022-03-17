import React, { useState } from 'react';

import Name from './Name';
import Weather from './Weather';
import Money from './Money';

const Form = () => {
  // const WelcomePage?
  const [name, setName] = useState('');
  const [weather, setWeather] = useState();
  const [money, setMoney] = useState('');

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleWeatherChange = (weather) => {
    setWeather(weather);
  };

  const handleMoneyChange = (money) => {
    setMoney(money);
  };

  return (
    <section>
      <h2>Welcomepage first</h2>
      {/* <WelcomePage /> */}

      <Name name={name} onInputChange={handleInputChange} />
      <Weather weather={weather} onWeatherChange={handleWeatherChange} />
      <Money money={money} onMoneyChange={handleMoneyChange} />
    </section>
  );
};

export default Form;

import React, { useState } from 'react';

import WelcomePage from './WelcomePage';
import Name from './Name';
import Weather from './Weather';
import Money from './Money';
// import Summary from './Summary';

const Form = () => {
  // const WelcomePage?
  const [name, setName] = useState('');
  const [weather, setWeather] = useState();
  const [money, setMoney] = useState('');
  const [next, setNext] = useState(1);

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleWeatherChange = (weather) => {
    setWeather(weather);
  };

  const handleMoneyChange = (money) => {
    setMoney(money);
  };

  const handleNextChange = () => {
    setNext(next + 1);
  };

  return (
    <section>
      {/* <h2>Form page</h2> */}

      {next === 1 && <WelcomePage onNextChange={handleNextChange} />}

      {next === 2 && (
        <Name
          name={name}
          onInputChange={handleInputChange}
          onNextChange={handleNextChange}
        />
      )}

      {next === 3 && (
        <Weather
          weather={weather}
          onWeatherChange={handleWeatherChange}
          onNextChange={handleNextChange}
        />
      )}

      {next === 4 && (
        <Money
          money={money}
          onMoneyChange={handleMoneyChange}
          onNextChange={handleNextChange}
        />
      )}
      {/* <Name name={name} onInputChange={handleInputChange} /> */}
      {/* <Weather weather={weather} onWeatherChange={handleWeatherChange} /> */}
      {/* <Money money={money} onMoneyChange={handleMoneyChange} /> */}
      {/* <Summary /> */}
    </section>
  );
};

export default Form;

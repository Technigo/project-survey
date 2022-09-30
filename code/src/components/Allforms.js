import React, { useState } from 'react';

import Opening from './Opening'
import Checkcake from './Checkcake'
import Radiocake from './Radiocake'
import Selectservice from './Selectservice'
import Price from './Price'
import Opinion from './Opinion'
import Summary from './Summary'

const allPrice = ['not important to worry about', 'very cheap', 'good price for its quality', 'kinda expensive', 'too expensive']

const Allforms = () => {
  /* All functions connected to the return below */
  const [counter, setCounter] = useState(1);
  const [name, setName] = useState('');
  const [cakeOption, setCakeOption] = useState([])
  const [quality, setCakeQuality] = useState('');
  const [service, setService] = useState('');
  const [priceRange, setPriceRange] = useState(2)
  const [prices, setPrice] = useState(allPrice[priceRange])
  const [opinion, setOpinion] = useState('');
  const [isVoucherVisible, setIsVoucherVisible] = useState(false);

  /* Every onChange function that affects the input */
  const onCounterChange = () => {
    setCounter(counter + 1)
  }
  const onNameChange = (event) => {
    setName(event.target.value)
  }
  const onCakeOptionChange = (cake) => {
    if (cakeOption.includes(cake)) {
      const filteredCakeOption = cakeOption.filter((item) => {
        return item !== cake
      })
      setCakeOption(filteredCakeOption)
    } else {
      setCakeOption([...cakeOption, cake])
    }
  }
  const onCakeQualityChange = (event) => {
    setCakeQuality(event.target.value)
  }
  const onServiceChange = (event) => {
    setService(event.target.value);
  }
  const onPriceRangeChange = (event) => {
    setPriceRange(event.target.value)
    setPrice(allPrice[event.target.value])
  }
  const onOpinionChange = (event) => {
    setOpinion(event.target.value);
  }
  const handleVoucherPress = () => {
    setIsVoucherVisible((isVisible) => !isVisible);
  };

  return (
    <>
      {counter === 1 && (
        <Opening
          name={name}
          onNameChange={onNameChange}
          onCounterChange={onCounterChange} />
      )}

      {counter === 2 && (
        <Checkcake
          cakeOption={cakeOption}
          onCakeOptionChange={onCakeOptionChange}
          onCounterChange={onCounterChange} />
      )}

      {counter === 3 && (
        <Radiocake
          quality={quality}
          onCakeQualityChange={onCakeQualityChange}
          onCounterChange={onCounterChange} />
      )}

      {counter === 4 && (
        <Selectservice
          service={service}
          onServiceChange={onServiceChange}
          onCounterChange={onCounterChange} />
      )}

      {counter === 5 && (
        <Price
          priceRange={priceRange}
          onPriceRangeChange={onPriceRangeChange}
          prices={prices}
          onCounterChange={onCounterChange} />
      )}

      {counter === 6 && (
        <Opinion
          opinion={opinion}
          onOpinionChange={onOpinionChange}
          onCounterChange={onCounterChange} />
      )}

      {counter === 7 && (
        <Summary
          name={name}
          cakeOption={cakeOption}
          quality={quality}
          service={service}
          prices={prices}
          opinion={opinion}
          isVoucherVisible={isVoucherVisible}
          handleVoucherPress={handleVoucherPress} />
      )}
    </>
  )
};

export default Allforms;
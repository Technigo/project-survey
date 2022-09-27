import React, { useState } from 'react';
import Intro from 'components/Intro.js';
import ProductType from 'components/ProductType.js';
import PriceInterval from 'components/PriceInterval.js'

export const App = () => {
  const [step, setStep] = useState(1);
  const [productType, setProductType] = useState('');
  const [priceInterval, setPriceInterval] = useState('');

  const handleStepCounter = () => {
    setStep(step + 1);
  }

  const handleProductType = () => {
    setProductType(productType);
  }

  const handlePriceInterval = () => {
    setPriceInterval(priceInterval);
  }
  return (

    <div>
      <p>Current Step: {step} {productType} {priceInterval}</p>
      <Intro />
      <ProductType handleProductType={handleProductType} productType={productType} />
      <PriceInterval handlePriceInterval={handlePriceInterval} priceInterval={priceInterval} />
      <button type="button" onClick={handleStepCounter}>Next Step</button>
    </div>
  );
}
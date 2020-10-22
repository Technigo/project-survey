import React, { useState } from 'react';

import FavIceNames from './Questions/Question1';
import Allergygroup from './Questions/Question2';
import SelectCopings from './Questions/Question3';
import SelectToppings from './Questions/Question6';
import Submit from './Submit';
// import Summary from './Summary';


const Form = () => {

  const [favIceName, setFavIceName] = useState('');
  const [allergy, setAllergy] = useState([]);
  const [coping, setSelectCoping] = useState('');
  const [topping, setSelectTopping] = useState([]);

  const [submit, setSubmit] = useState(false);
  // const [summary, setSummary] = useState(false);


  const handleFavIceNameChange = newFavIceName => {
    setFavIceName(newFavIceName);
  }

  const handleAllergyChange = allergyValue => {
    allergy.includes(allergyValue)
      ? setAllergy(allergy.filter(item => item !== allergyValue))
      : setAllergy([...allergy, allergyValue]);
  };

  const handleCopingChange = newCoping => {
    setSelectCoping(newCoping);
  }

  const handleToppingChange = toppingValue => {
    topping.includes(toppingValue)
      ? setSelectTopping(topping.filter(item => item !== toppingValue))
      : setSelectTopping([...topping, toppingValue]);
  }

  // const handleSubmit = event => {
  //   setSummary(true);
  // };

  return (

    <form >
      <FavIceNames
        favIceName={favIceName}
        onFavIceNameChange={handleFavIceNameChange}
      />

      <Allergygroup
        userAllergy={allergy}
        onAllergyChange={handleAllergyChange}
      />
      <SelectCopings
        coping={coping}
        onCopingChange={handleCopingChange}
      />

      <SelectToppings
        topping={topping}
        onToppingChange={handleToppingChange}
      />

      {/* <Summary
        favIceName={favIceName}
        userAllergy={allergy}
        coping={coping}
        topping={topping}
      /> */}

      <Submit />

    </form >

  );

};

export default Form;
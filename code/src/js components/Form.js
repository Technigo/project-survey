import React, { useState } from 'react';

import {Questionname} from "js components/Questionname"
import {Questionaddress} from "js components/Questionaddress"
import { Questiondrink } from 'js components/Questiondrink';
import { Questionamountofcoffee } from 'js components/Questionamountofcoffee';
import { Questionrange } from 'js components/Questionrange';
import { ButtonSubmit } from 'js components/ButtonSubmit';
import { Header } from 'js components/Header';
import { Summary } from 'js components/Summary';

export const Form = () => {
  const [answername, setAnswername] = useState ("");
  const [answeraddress, setAnsweraddress] = useState ("");
  const [answerdrink, setAnswerdrink] = useState ("");
  const [answeramount, setAnsweramount] = useState ("");
  const [coffeeprice, setCoffeeprice] = useState ("");

  const handleNameChange = newName => {
  setAnswername(newName);
  } 
  const handleAddressChange = newAddress => {
  setAnsweraddress(newAddress);
  } 
  const handleDrinkChange = newDrink => {
  setAnswerdrink(newDrink);
  } 
  const handleAmountChange = newAmount => {
  setAnsweramount(newAmount);
  } 
  const handleCoffeepriceChange = newCoffeeprice => {
  setCoffeeprice(newCoffeeprice);
  } 
  const [showSummary, setShowSummary] = useState (false);

  const handleSubmit = event => {
  event.preventDefault();
  setShowSummary(true);
  };

  return (
    <>
    <section className="form">
      {! showSummary ? ( 
      <form onSubmit={handleSubmit}>
        <Header />
        <Questionname
          name={answername}
          onNameChange = {handleNameChange}
        />
        <Questionaddress
          address={answeraddress}
          onAddressChange = {handleAddressChange}
        />
        <Questiondrink
          drink={answerdrink}
          onDrinkChange = {handleDrinkChange}
        />
        <Questionamountofcoffee
          answeramount={answeramount}
          onAmountChange={handleAmountChange}
        />
        <Questionrange
          coffeeprice={coffeeprice}
          onRangeChange = {handleCoffeepriceChange}
        />
        <ButtonSubmit />
      </form>
    ) : ( <Summary name = {answername}
                  address = {answeraddress}
                  drink = {answerdrink}
                  answeramount={answeramount}
          />    
        )
  }
      </section>
    </>
)}
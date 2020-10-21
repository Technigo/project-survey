import React, { useState } from 'react';
import {Questionname} from "./Questionname"
import {Questionaddress} from "./Questionaddress"
import { Questiondrink } from './Questiondrink';
import { Questionamountofcoffee } from './Questionamountofcoffee';
import { Questionrange } from './Questionrange';
import { Summary } from './Summary';

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
  {! showSummary ? ( 
  <form onSubmit={handleSubmit}>
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
        amount={answeramount}
        onAmountChange = {handleAmountChange}
        />
    <Questionrange
        price={coffeeprice}
        onRangeChange = {handleCoffeepriceChange}
        />

        <button type="submit">submit</button>
  </form>
  ) : ( <Summary name = {answername}
                    address = {answeraddress}
                    drink = {answerdrink}/>
      )
}
</>
)}
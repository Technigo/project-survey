import React from 'react'
import FavIceNames from './components/Questions/Question1'
import PickLactose from './components/Questions/Question2'
import SelectCopings from './components/Questions/Question3'
import PickSeason from './components/Questions/Question4'
import PickIceNum from './components/Questions/Question5'
import SelectToppings from './components/Questions/Question6'
import Header from './components/Header'
import Summary from './components/Summary'


export const App = () => {

  // const handleSubmit = event => {
  //   event.peventDefault();
  //   setShowSummary(true);
  // };

  return (
    <>
      <Header />
      <form>
        <FavIceNames />
        <PickLactose />
        <SelectCopings />
        <PickSeason />
        <PickIceNum />
        <SelectToppings />
      </form>
      <Summary />
    </>
  )
}
